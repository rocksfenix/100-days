import { useEffect, useState } from 'react'
import { getChallengeState } from './challenge'

export function useChallengeClock() {
  const [state, setState] = useState(() => getChallengeState())

  useEffect(() => {
    let frame = 0

    const tick = () => {
      setState(getChallengeState())
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [])

  return state
}
