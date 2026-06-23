export class GanttPlugin {}

export class EventSchedulerPlugin {}

export class PivotPlugin {}

export const DEFAULT_CALENDAR = {
  id: 0,
  name: 'Default',
  timeZone: 'UTC',
  workingDays: [1, 2, 3, 4, 5],
  holidays: [],
  hoursPerDay: 8,
}

export function createDefaultTaskTableColumn(prop: string) {
  return {
    prop,
    name: prop,
  }
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function parseDateTime(value: string) {
  const [date, time = '00:00'] = value.replace('Z', '').split('T')
  const [year, month, day] = date.split('-').map(Number)
  const [hours = 0, minutes = 0] = time.split(':').map(Number)
  return new Date(Date.UTC(year, month - 1, day, hours, minutes))
}

export function toIsoDate(date: Date) {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`
}

export function parseIsoDate(date: string) {
  return parseDateTime(date)
}

export function addIsoDateDays(date: string, days: number) {
  const value = parseIsoDate(date)
  value.setUTCDate(value.getUTCDate() + days)
  return toIsoDate(value)
}

export function addIsoDateMonths(date: string, months: number) {
  const value = parseIsoDate(date)
  value.setUTCMonth(value.getUTCMonth() + months)
  return toIsoDate(value)
}

export function getWeekStartIsoDate(date: Date) {
  const value = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  const day = value.getUTCDay() || 7
  value.setUTCDate(value.getUTCDate() - day + 1)
  return toIsoDate(value)
}

export function getMonthStartIsoDate(date: Date) {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-01`
}

export function parseTimeOfDay(time: string) {
  const [hours = 0, minutes = 0] = time.split(':').map(Number)
  return hours * 60 + minutes
}

export function formatTimeOfDay(minutes: number) {
  const normalized = ((minutes % 1440) + 1440) % 1440
  return `${pad(Math.floor(normalized / 60))}:${pad(normalized % 60)}`
}

export function createDateTime(date: string, minutes: number) {
  const value = parseIsoDate(date)
  value.setUTCMinutes(value.getUTCMinutes() + minutes)
  return `${toIsoDate(value)}T${pad(value.getUTCHours())}:${pad(value.getUTCMinutes())}:00Z`
}

export function createSchedulerDateTime(date: string, time: string, dayOffset = 0) {
  return createDateTime(addIsoDateDays(date, dayOffset), parseTimeOfDay(time))
}

export function shiftDateTime(dateTime: string, minutes: number) {
  const value = parseDateTime(dateTime)
  value.setUTCMinutes(value.getUTCMinutes() + minutes)
  return `${toIsoDate(value)}T${pad(value.getUTCHours())}:${pad(value.getUTCMinutes())}:00Z`
}

export function getLocalDateTimeAsSchedulerDateTime(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:00`
}

export function getIsoWeekNumber(date: Date) {
  const value = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  value.setUTCDate(value.getUTCDate() + 4 - (value.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(value.getUTCFullYear(), 0, 1))
  return Math.ceil((((value.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
}
