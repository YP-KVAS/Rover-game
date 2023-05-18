export function timerToString(timer: number) {
  const m = Math.floor(timer / 60)
  const s = timer % 60
  return `${m}:${s < 10 ? '0' + s : s}`
}
