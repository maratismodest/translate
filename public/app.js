
window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js')
      console.log('serviceWorker registration success', reg)
    } catch (e) {
      console.log('serviceWorker registration failed')
    }
  }

  await console.log('done')
})
