const DEFAULT_THRESHOLD = 24

export const useScrollAtTop = (threshold = DEFAULT_THRESHOLD) => {
  const isAtTop = useState('scroll-at-top', () => true)
  const isScrollReady = useState('scroll-ready', () => false)

  if (import.meta.client) {
    const update = () => {
      if (!isScrollReady.value) {
        return
      }
      isAtTop.value = window.scrollY < threshold
    }

    onMounted(() => {
      isScrollReady.value = true
      update()
      window.addEventListener('scroll', update, { passive: true })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', update)
    })
  }

  return { isAtTop, isScrollReady }
}
