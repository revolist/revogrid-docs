import {
  createControl,
  createDropdownControl,
  createFormField,
  createAlertElement,
  releaseAlertElement,
} from '@revolist/ui'
import { attachTemporalPicker } from '@revolist/ui/date-time'
import { statusBadge, type StatusLabels } from './status-badges.ts'
import type { DropdownControl } from '@revolist/ui/dropdown/control'
import { createFrameworkMount } from '@revolist/ui/framework'
import { Panel, Toolbar, Badge } from '@revolist/ui/preact'

/** Native host adapter: UI owns every visible control and surface; the app owns
 * form/query values. Hidden selects retain standard FormData/reset semantics. */
export function installUi(
  root: HTMLElement,
  statusLabels: StatusLabels,
  dates: {
    fromPicker: string
    untilPicker: string
    pickerApply: string
    pickerCancel: string
    pickerClear: string
    pickerDate: string
    invalidDate: string
    calendarLocale: string
  },
) {
  const dropdowns = new Map<HTMLSelectElement, DropdownControl<string>>()
  const cleanups: (() => void)[] = []
  for (const old of root.querySelectorAll<HTMLButtonElement | HTMLInputElement | HTMLElement>(
    'button,input,summary',
  )) {
    const tag = old.localName as 'button' | 'input' | 'summary'
    const attributes = Object.fromEntries(
      Array.from(old.attributes, attribute => [
        attribute.name === 'class' ? 'className' : attribute.name,
        attribute.value,
      ]),
    )
    if (tag === 'input') attributes.type = (old as HTMLInputElement).type
    const control = createControl(document, tag, attributes)
    control.replaceChildren(...Array.from(old.childNodes))
    old.replaceWith(control)
  }
  for (const label of root.querySelectorAll<HTMLLabelElement>('label.check')) {
    const input = label.querySelector<HTMLInputElement>('input')!
    const badge = statusBadge(
      (tag, props, children) => {
        const element = document.createElement(tag)
        element.className = String(props.class)
        for (const [key, value] of Object.entries(props.style as Record<string, string>))
          element.style.setProperty(key, value)
        element.textContent = String(children)
        return element
      },
      input.value,
      statusLabels,
    )
    label.replaceChildren(input, badge)
  }
  for (const select of root.querySelectorAll('select')) {
    const caption =
      select.getAttribute('aria-label') ??
      select.closest('label')?.firstChild?.textContent?.trim() ??
      select.id
    const source = Array.from(select.options, option => ({
      value: option.value,
      label: option.text,
      disabled: option.disabled,
    }))
    const dropdown = createDropdownControl(document, {
      source,
      value: select.value,
      disabled: select.disabled,
      config: { ariaLabel: caption, search: false },
      onChange: value => {
        select.value = String(value)
        select.dispatchEvent(new Event('change', { bubbles: true }))
      },
    })
    select.hidden = true
    select.tabIndex = -1
    select.setAttribute('aria-hidden', 'true')
    select.after(dropdown.element)
    dropdowns.set(select, dropdown)
    cleanups.push(() => dropdown.destroy())
  }
  for (const name of ['from', 'until'] as const) {
    const input = root.querySelector<HTMLInputElement>(`input[name=${name}]`)!
    const field = document.createElement('span')
    field.className = 'rv-date-time-field'
    input.replaceWith(field)
    field.append(input)
    cleanups.push(
      attachTemporalPicker(
        input,
        {
          kind: 'date',
          autoApply: true,
          calendar: {
            defaultMonth: '2026-02-01',
            captionLayout: 'dropdown',
            locale: dates.calendarLocale,
          },
          text: {
            chooseDate: name === 'from' ? dates.fromPicker : dates.untilPicker,
            date: dates.pickerDate,
            invalid: dates.invalidDate,
            invalidDate: dates.invalidDate,
          },
          actions: {
            apply: dates.pickerApply,
            cancel: dates.pickerCancel,
            clear: dates.pickerClear,
          },
        },
        value => {
          input.value = value
          input.dispatchEvent(new Event('change', { bubbles: true }))
        },
      ),
    )
  }
  for (const label of root.querySelectorAll<HTMLLabelElement>('label:not(.check)')) {
    const caption = label.firstChild?.textContent?.trim() ?? ''
    const hint = label.querySelector('small')?.textContent ?? undefined
    const body = document.createElement('span')
    for (const child of Array.from(label.children))
      if (child.localName !== 'small') body.append(child)
    const field = createFormField(document, {
      label: caption,
      control: body,
      hint,
      className: label.className,
    })
    label.replaceWith(field)
  }
  function surface(
    element: HTMLElement,
    component: typeof Panel | typeof Toolbar | typeof Badge,
    className: string,
  ) {
    const host = document.createElement('div')
    element.replaceWith(host)
    element.className = `${className}-content`
    const mount = createFrameworkMount<HTMLElement>(host, targets => {
      for (const target of targets)
        if (target.element.firstChild !== target.content)
          target.element.replaceChildren(target.content)
    })
    mount.render(component, { className }, (props, content) => ({
      ...props,
      children: content(element),
    }))
    cleanups.push(() => mount.destroy())
  }
  const shell = root.querySelector<HTMLElement>('.shell')!
  surface(shell, Panel, 'shell')
  for (const toolbar of root.querySelectorAll<HTMLElement>('.actions'))
    surface(toolbar, Toolbar, 'actions')
  for (const panel of root.querySelectorAll<HTMLElement>('.chart-panel'))
    surface(panel, Panel, 'chart-panel')
  const badge = root.querySelector<HTMLElement>('.badge')
  if (badge) surface(badge, Badge, 'badge')
  for (const old of root.querySelectorAll<HTMLElement>('#form-error,#load-error')) {
    const id = old.id,
      hidden = old.hidden
    old.removeAttribute('id')
    old.removeAttribute('hidden')
    old.removeAttribute('role')
    if (id === 'form-error') {
      const span = document.createElement('span')
      span.id = 'form-error-message'
      old.append(span)
    }
    const placeholder = document.createElement('div')
    old.replaceWith(placeholder)
    const alert = createAlertElement(document, { tone: 'danger', role: 'alert', content: old })
    alert.id = id
    alert.hidden = hidden
    placeholder.replaceWith(alert)
    cleanups.push(() => releaseAlertElement(alert))
  }
  return {
    setSelect(select: HTMLSelectElement, value: string) {
      select.value = value
      dropdowns.get(select)!.value = value
    },
    syncForm() {
      for (const [select, dropdown] of dropdowns) dropdown.value = select.value
    },
    destroy() {
      for (const cleanup of cleanups.reverse()) cleanup()
    },
  }
}
