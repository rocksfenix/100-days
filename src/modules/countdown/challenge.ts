export const CHALLENGE_START = new Date('2026-09-22T00:00:00-06:00')
export const CHALLENGE_DAYS = 100
export const CHALLENGE_MS = CHALLENGE_DAYS * 24 * 60 * 60 * 1000
export const CHALLENGE_END = new Date(CHALLENGE_START.getTime() + CHALLENGE_MS)

export type ChallengePhase = 'prestart' | 'active' | 'complete'

export type TimeParts = {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

export type ChallengeState = {
  phase: ChallengePhase
  remaining: TimeParts
  progress: number
  currentDay: number
  target: Date
}

const EMPTY_TIME: TimeParts = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
}

export function getRemaining(now: number, target: number): TimeParts {
  const diff = Math.max(0, target - now)

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    milliseconds: Math.floor(diff % 1_000),
  }
}

export function getChallengeState(now = Date.now()): ChallengeState {
  const start = CHALLENGE_START.getTime()
  const end = CHALLENGE_END.getTime()

  if (now < start) {
    return {
      phase: 'prestart',
      remaining: getRemaining(now, start),
      progress: 0,
      currentDay: 0,
      target: CHALLENGE_START,
    }
  }

  if (now >= end) {
    return {
      phase: 'complete',
      remaining: EMPTY_TIME,
      progress: 1,
      currentDay: CHALLENGE_DAYS,
      target: CHALLENGE_END,
    }
  }

  const elapsed = now - start

  return {
    phase: 'active',
    remaining: getRemaining(now, end),
    progress: elapsed / CHALLENGE_MS,
    currentDay: Math.min(CHALLENGE_DAYS, Math.floor(elapsed / 86_400_000) + 1),
    target: CHALLENGE_END,
  }
}

export function formatChallengeDate(date: Date) {
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Mexico_City',
  }).format(date)
}
