const keys = document.querySelectorAll('.key')

const handleMouseDown = (key) => {
  key.style.background = '#ddd'
}

const handleMouseUp = (key) => {
  key.style.background = 'white'
}

keys.forEach((key) => {
  key.addEventListener('mousedown', () => handleMouseDown(key))
  key.addEventListener('mouseup', () => handleMouseUp(key))
})
