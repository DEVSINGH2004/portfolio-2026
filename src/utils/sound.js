let clickAudio = new Audio("/sounds/click.mp3")
clickAudio.volume = 0.4

export const playClick = () => {
  clickAudio.currentTime = 0
  clickAudio.play().catch(() => {})
}
