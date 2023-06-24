const keys = document.querySelectorAll('.key')

const handleMouseDown = (key) => {
  if (key.className.includes('black')) {
    return
  }
  key.style.background = '#ddd'
}

const handleMouseUp = (key) => {
  if (key.className.includes('black')) {
    return
  }
  key.style.background = 'white'
}

keys.forEach((key) => {
  key.addEventListener('mousedown', () => handleMouseDown(key))
  key.addEventListener('mouseup', () => handleMouseUp(key))
})
