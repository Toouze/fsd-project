'use strict'

const arrowDate = document.querySelectorAll('.arrow__date'),
    arrowGuests = document.querySelector('.arrow__guests'),
    ardwn = document.querySelector('.ardwn'),
    calendar = document.querySelector('.calendar-box'),
    dropGuests = document.querySelector('.three-guests')


function showCalendar() {
    calendar.classList.remove('disp-none')
    calendar.classList.add('disp-block')
}

function showGuests() {
    dropGuests.classList.remove('disp-none')
    dropGuests.classList.add('disp-block')
}

function hideGuests() {
    dropGuests.classList.remove('disp-block')
    dropGuests.classList.add('disp-none')
}

function hideCalendar() {
    calendar.classList.remove('disp-block')
    calendar.classList.add('disp-none')
}

arrowDate.forEach(elem => {
    elem.addEventListener('click', () => {
        if (calendar.classList.contains('disp-none') && dropGuests.classList.contains('disp-none')) {
            showCalendar()
        } else if (calendar.classList.contains('disp-none') && dropGuests.classList.contains('disp-block')) {
            hideGuests()
            showCalendar()
        } else {
            hideCalendar()
        }
    })
});


arrowGuests.addEventListener('click', () => {
    if (dropGuests.classList.contains('disp-none') && calendar.classList.contains('disp-none')) {
        showGuests()
    }
})


ardwn.addEventListener('click', (hideGuests))