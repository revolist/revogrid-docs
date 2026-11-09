import { useRef, useState } from 'react'
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Legend,
  ProgressBar,
  SegmentedSwitch,
  TimeGrid,
} from '@revolist/ui/react'
import { timeGridCellKey } from '@revolist/ui/time-grid'
import alexPhoto from './assets/alex.jpg'
import samPhoto from './assets/sam.jpg'

// Adapted from the Revo UI gallery's weekly planning example.
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
  (long, index) => ({ weekday: (index + 1) % 7, short: long.slice(0, 3), long }),
)
const members = {
  alex: { name: 'Alex Morgan', role: 'Product designer', photo: alexPhoto },
  sam: { name: 'Sam Rivera', role: 'Frontend engineer', photo: samPhoto },
}
type Member = keyof typeof members
const priorities = [
  'Prepare the weekly review',
  'Protect time for deep work',
  'Share a progress update',
]
const defaults = (member: Member) =>
  new Set(
    (member === 'alex'
      ? [
          [1, 8],
          [1, 10],
          [2, 10],
          [3, 8],
          [3, 10],
          [4, 14],
          [5, 10],
        ]
      : [
          [1, 10],
          [2, 8],
          [3, 10],
          [4, 8],
          [5, 14],
        ]
    ).flatMap(([day, hour]) => [timeGridCellKey(day, hour), timeGridCellKey(day, hour + 1)]),
  )

export default function UiQuickStart() {
  const [member, setMember] = useState<Member>('alex')
  const [schedules, setSchedules] = useState<Record<Member, Set<string>>>({
    alex: defaults('alex'),
    sam: defaults('sam'),
  })
  const [completed, setCompleted] = useState<Record<Member, string[]>>({
    alex: [priorities[0]],
    sam: [],
  })
  const [focused, setFocused] = useState('1:8')
  const matrixRef = useRef<HTMLDivElement>(null)
  const cells = schedules[member]
  const person = members[member]

  function toggle(day: number, hour: number, selected: boolean) {
    setSchedules(current => {
      const next = new Set(current[member])
      for (const h of [hour, hour + 1])
        selected ? next.delete(timeGridCellKey(day, h)) : next.add(timeGridCellKey(day, h))
      return { ...current, [member]: next }
    })
  }

  return (
    <main className="planning rv-ui">
      <div className="planning-caption">
        <span>WEEKLY PLANNING</span>
        <span>Time grid & controls</span>
      </div>
      <header className="planning-heading">
        <h1>A little structure. A better week.</h1>
        <p>Protect focus time and keep your priorities in view.</p>
      </header>
      <div className="planning-actions">
        <SegmentedSwitch
          ariaLabel="Planning team member"
          role="radiogroup"
          value={member}
          options={[
            { value: 'alex', label: 'Alex Morgan' },
            { value: 'sam', label: 'Sam Rivera' },
          ]}
          onChange={value => {
            setMember(value as Member)
            setFocused('1:8')
          }}
        />
        <Button
          variant="secondary"
          onClick={() => {
            setSchedules(current => ({ ...current, [member]: defaults(member) }))
            setCompleted(current => ({
              ...current,
              [member]: member === 'alex' ? [priorities[0]] : [],
            }))
          }}
        >
          Reset week
        </Button>
      </div>
      <div className="planning-person">
        <Avatar value={person.photo} label={person.name} initials={person.name[0]} size={40} />
        <div>
          <strong>{person.name}</strong>
          <span>{person.role}</span>
        </div>
        <Badge variant="neutral">Typical week</Badge>
      </div>
      <div className="planning-grid-scroll">
        <TimeGrid
          days={days}
          cells={cells}
          focused={focused}
          weekendDays={[0, 6]}
          workingHours={{ startHour: 8, endHour: 18 }}
          gridLabel="Weekly focus plan"
          hourLabel={hour => `${String(hour).padStart(2, '0')}:00`}
          cellLabel={(day, start, end, selected) =>
            `${day.long} ${start}–${end}, ${selected ? 'selected' : 'unselected'}`
          }
          matrixRef={matrixRef}
          onFocus={setFocused}
          onClick={(_event, day, hour, selected) => toggle(day, hour, selected)}
          onPointerDown={() => {}}
          onPointerEnter={() => {}}
          onKeyDown={(event, day, hour) => {
            const index = days.findIndex(item => item.weekday === day)
            let nextDay = day
            let nextHour = hour
            if (event.key === 'ArrowLeft') nextHour = (hour + 22) % 24
            else if (event.key === 'ArrowRight') nextHour = (hour + 2) % 24
            else if (event.key === 'ArrowUp') nextDay = days[(index + 6) % 7].weekday
            else if (event.key === 'ArrowDown') nextDay = days[(index + 1) % 7].weekday
            else return
            event.preventDefault()
            const key = timeGridCellKey(nextDay, nextHour)
            setFocused(key)
            matrixRef.current
              ?.querySelector<HTMLButtonElement>(`[data-time-cell="${key}"]`)
              ?.focus()
          }}
        />
      </div>
      <Legend
        label="Planning legend"
        items={[
          { id: 'focus', label: 'Focus time', tone: 'selected' },
          { id: 'outside', label: 'Outside work hours', tone: 'outside' },
          { id: 'weekend', label: 'Weekend', tone: 'muted' },
        ]}
      />
      <section className="planning-summary" aria-label="Weekly priorities">
        <div className="planning-capacity">
          <div>
            <strong>Focus capacity</strong>
            <output aria-label="Planned focus hours">{cells.size}h / 40h</output>
          </div>
          <ProgressBar
            value={Math.min(100, (cells.size / 40) * 100)}
            ariaLabel="Planned weekly capacity"
          />
        </div>
        <div className="planning-priority-heading">
          <strong>This week's priorities</strong>
          <Badge variant="neutral">
            {completed[member].length}/{priorities.length}
          </Badge>
        </div>
        <div className="planning-priorities">
          {priorities.map(label => (
            <Checkbox
              key={label}
              label={label}
              checked={completed[member].includes(label)}
              onChange={(checked: boolean) =>
                setCompleted(current => ({
                  ...current,
                  [member]: checked
                    ? [...current[member], label]
                    : current[member].filter(item => item !== label),
                }))
              }
            />
          ))}
        </div>
      </section>
    </main>
  )
}
