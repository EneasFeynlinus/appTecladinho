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
  Tab: () => handleMouseDown(keys[0]),
  1: () => handleMouseDown(keys[1]),
  q: () => handleMouseDown(keys[2]),
  2: () => handleMouseDown(keys[3]),
  w: () => handleMouseDown(keys[4]),
  e: () => handleMouseDown(keys[5]),
  4: () => handleMouseDown(keys[6]),
  r: () => handleMouseDown(keys[7]),
  5: () => handleMouseDown(keys[8]),
  t: () => handleMouseDown(keys[9]),
  6: () => handleMouseDown(keys[10]),
  y: () => handleMouseDown(keys[11]),
  u: () => handleMouseDown(keys[12]),
  8: () => handleMouseDown(keys[13]),
  i: () => handleMouseDown(keys[14]),
  9: () => handleMouseDown(keys[15]),
  o: () => handleMouseDown(keys[16]),
  p: () => handleMouseDown(keys[17]),
  '-': () => handleMouseDown(keys[18]),
  '[': () => handleMouseDown(keys[19]),
  '=': () => handleMouseDown(keys[20]),
  ']': () => handleMouseDown(keys[21]),
  Backspace: () => handleMouseDown(keys[22]),
  ç: () => handleMouseDown(keys[23]),
}

document.addEventListener('keydown', (event) => {
  if (event.key !== 'F12') {
    event.preventDefault()
  }
  keyDownMapper[event.key]()
})
