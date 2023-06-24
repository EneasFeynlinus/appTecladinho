const keys = document.querySelectorAll('.key')

const handleMouseDown = (key) => {
  if (key.className.includes('black')) {
    key.classList.add('black_pressed')
    return
  }
  key.style.background = '#ddd'
}

const handleMouseUp = (key) => {
  if (key.className.includes('black')) {
    key.classList.remove('black_pressed')
    return
  }
  key.style.background = 'white'
}

keys.forEach((key) => {
  key.addEventListener('mousedown', () => handleMouseDown(key))
  key.addEventListener('mouseup', () => handleMouseUp(key))
})
