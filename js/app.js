const keys = document.querySelectorAll('.key')
const checkBox = document.querySelector('.checkbox_keys')
const switcher = document.querySelector('.switcher')
const keysSection = document.querySelector('.piano_keys')

const playNote = (note) => {
  const audio = new Audio(`../notes/${note}.wav`)
  audio.play()
}

const handleMouseDown = (key) => {
  playNote(key.getAttribute('data-note'))

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

checkBox.addEventListener('change', ({ target }) => {
  if (target.checked) {
    switcher.classList.add('switcher--active')
    keysSection.classList.remove('disabled_keys')
    return
  }

  switcher.classList.remove('switcher--active')
  keysSection
})

const keyDownMapper = {
  q: () => handleMouseDown(keys[2]),
}

document.addEventListener('keydown', (event) => {
  keyDownMapper[event.key]()
})
