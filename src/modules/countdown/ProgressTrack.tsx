type ProgressTrackProps = {
  progress: number
  currentDay: number
  totalDays: number
}

export function ProgressTrack({ progress, currentDay, totalDays }: ProgressTrackProps) {
  const percent = Math.min(100, Math.max(0, progress * 100))

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-3 flex items-end justify-between gap-4 text-stone">
        <p className="text-sm tracking-wide">
          Día <span className="font-mono text-cream">{currentDay}</span> de {totalDays}
        </p>
        <p className="font-mono text-sm text-gold">{percent.toFixed(2)}%</p>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-cream/10">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#8a6d2e,#e8c36a_55%,#f3d48a)] transition-[width] duration-200"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
