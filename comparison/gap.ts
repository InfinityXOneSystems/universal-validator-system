export function gapAnalysis(diff) {
  return {
    gaps: diff.missing,
    opportunities: diff.weaker
  }
}
