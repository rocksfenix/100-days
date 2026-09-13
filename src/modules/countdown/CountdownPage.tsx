import { useState } from 'react'
import { Background } from './Background'
import {
  CHALLENGE_DAYS,
  CHALLENGE_END,
  CHALLENGE_START,
  formatChallengeDate,
} from './challenge'
import { ProgressTrack } from './ProgressTrack'
import { TimeUnit } from './TimeUnit'
import { useChallengeClock } from './useChallengeClock'

const COPY = {
  prestart: {
    kicker: 'Falta poco',
    title: 'El reto comienza en',
  },
  active: {
    kicker: 'En curso',
    title: 'Tiempo restante',
  },
  complete: {
    kicker: 'Hecho',
    title: 'Reto completado',
  },
} as const

function nextHue(current: number) {
  let hue = Math.floor(Math.random() * 360)

  while (Math.min(Math.abs(hue - current), 360 - Math.abs(hue - current)) < 50) {
    hue = Math.floor(Math.random() * 360)
  }

  return hue
}

export function CountdownPage() {
  const { phase, remaining, progress, currentDay } = useChallengeClock()
  const [hue, setHue] = useState(0)
  const copy = COPY[phase]

  return (
    <main
      className="relative flex min-h-dvh cursor-pointer flex-col px-4 py-8 transition-[filter] duration-700 ease-out sm:px-6 sm:py-10 lg:px-8"
      style={{ filter: `hue-rotate(${hue}deg)` }}
      onClick={() => setHue(nextHue)}
    >
      <Background />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-8 lg:gap-10">
        <header className="enter flex flex-col items-center text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-gold sm:text-xs">
            Reto 100
          </p>
          <h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Cien días.
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-stone sm:text-base">
            Una cuenta atrás anclada al 14 de septiembre a las 00:00. Cada recarga
            muestra el tiempo exacto.
          </p>
        </header>

        <section className="enter enter-delay-1 w-full" aria-live="off">
          <div className="mb-6 flex flex-col items-center text-center sm:mb-7">
            <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-gold">
              {copy.kicker}
            </span>
            <h2 className="mt-3 text-xl font-medium text-cream sm:mt-4 sm:text-2xl">
              {copy.title}
            </h2>
          </div>

          <div
            role="timer"
            aria-label={`${remaining.days} días, ${remaining.hours} horas, ${remaining.minutes} minutos, ${remaining.seconds} segundos`}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
          >
            <TimeUnit value={remaining.days} label="Días" digits={3} featured />
            <TimeUnit value={remaining.hours} label="Horas" digits={2} />
            <TimeUnit value={remaining.minutes} label="Minutos" digits={2} />
            <TimeUnit value={remaining.seconds} label="Segundos" digits={2} />
            <TimeUnit value={remaining.milliseconds} label="Milisegundos" digits={3} />
          </div>

          <div className="enter enter-delay-2 mt-8 sm:mt-10">
            {phase === 'active' ? (
              <ProgressTrack
                progress={progress}
                currentDay={currentDay}
                totalDays={CHALLENGE_DAYS}
              />
            ) : (
              <p className="text-center text-sm text-stone">
                {phase === 'prestart'
                  ? `Inicio: ${formatChallengeDate(CHALLENGE_START)}`
                  : 'Los 100 días ya quedaron atrás.'}
              </p>
            )}
          </div>
        </section>

        <footer className="enter enter-delay-3 flex flex-col items-center gap-2 text-center text-xs text-stone sm:flex-row sm:justify-center sm:gap-6 sm:text-sm">
          <p>
            Inicio · <span className="text-cream/80">{formatChallengeDate(CHALLENGE_START)}</span>
          </p>
          <span className="hidden h-px w-8 bg-gold/30 sm:block" />
          <p>
            Cierre · <span className="text-cream/80">{formatChallengeDate(CHALLENGE_END)}</span>
          </p>
        </footer>
      </div>
    </main>
  )
}
