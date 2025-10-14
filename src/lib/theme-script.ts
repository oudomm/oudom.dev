export const themeScript = `
  try {
    const storedTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const theme = storedTheme || systemTheme
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  } catch (e) {
    console.error(e)
  }
`;
