export async function crawl(url) {
  return {
    url,
    capture: {
      html: true,
      js: true,
      apis: true,
      network: true,
      infra: true
    },
    timestamp: new Date().toISOString()
  }
}
