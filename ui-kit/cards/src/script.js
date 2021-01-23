'use strict'

const manCheckbox = document.querySelector('.check__man'),
    manCirc = document.querySelector('.check-man__circle'),
    manNote = document.querySelector('.check-man__note')

    
manCirc.addEventListener('click', () => {
    manCirc.classList.add('display')
    if (manNote.style.color='#575871') {
        manNote.style.color = '#8F8FA0'
    }
})


manCheckbox.addEventListener('click', () => {
    manCirc.classList.remove('display')
    if (manNote.style.color='#8F8FA0') {
        manNote.style.color = '#575871'
    }
})

