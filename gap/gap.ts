export function gap(diff) {
  return {
    gaps: diff.missing,
    opportunities: diff.weaker
  }
}
