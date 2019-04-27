export function initTheme() {
  const cache = localStorage.getItem('theme')
  if (cache) {
    return cache !== 'dark'
  }
  return new Date().getHours() < 16
}
