export function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#070706]" />
      <div className="orb-a absolute -top-24 left-[-10%] h-[55vw] w-[55vw] max-h-[640px] max-w-[640px] rounded-full bg-[radial-gradient(circle,rgba(232,195,106,0.18)_0%,rgba(232,195,106,0)_68%)]" />
      <div className="orb-b absolute top-[20%] right-[-15%] h-[50vw] w-[50vw] max-h-[560px] max-w-[560px] rounded-full bg-[radial-gradient(circle,rgba(196,82,42,0.16)_0%,rgba(196,82,42,0)_70%)]" />
      <div className="absolute bottom-[-20%] left-[20%] h-[42vw] w-[42vw] max-h-[480px] max-w-[480px] rounded-full bg-[radial-gradient(circle,rgba(92,58,140,0.16)_0%,rgba(92,58,140,0)_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,7,6,0.15),rgba(7,7,6,0.72))]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(243,228,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(243,228,184,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(rgba(255,255,255,0.55)_0.6px,transparent_0.6px)] [background-size:3px_3px]" />
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-mono text-[38vw] font-semibold leading-none text-cream/[0.035] sm:text-[28vw]">
        100
      </p>
    </div>
  )
}
