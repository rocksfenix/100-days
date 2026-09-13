type TimeUnitProps = {
  value: number
  label: string
  digits: number
  featured?: boolean
}

export function TimeUnit({ value, label, digits, featured = false }: TimeUnitProps) {
  const padded = String(value).padStart(digits, '0')

  return (
    <div className={featured ? 'col-span-2 sm:col-span-1' : undefined}>
      <div className="relative overflow-hidden rounded-xl border border-gold/30 bg-[linear-gradient(180deg,#221f19_0%,#100f0c_48%,#1a1813_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(243,212,138,0.12)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white/[0.045]" />
        <div className="pointer-events-none absolute inset-x-3 top-1/2 z-10 h-px bg-black/70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold/20" />
        <p
          className={`relative px-2 py-3 text-center font-mono font-medium tabular-nums tracking-tight text-gold-soft sm:px-3 sm:py-4 lg:py-5 ${
            featured
              ? 'text-5xl sm:text-5xl lg:text-6xl'
              : 'text-4xl sm:text-5xl lg:text-6xl'
          }`}
        >
          {padded}
        </p>
      </div>
      <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-stone sm:mt-2.5 sm:text-xs">
        {label}
      </p>
    </div>
  )
}
