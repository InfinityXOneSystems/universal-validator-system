export function build110Plan(gaps) {
  return {
    actions: gaps.map(g => "Exceed " + g),
    multiplier: 1.1
  }
}
