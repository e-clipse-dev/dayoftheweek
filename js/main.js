
document.getElementById('check').addEventListener('click', check) 

function check() {
    const day = document.getElementById('day').value.toLowerCase()

    if (day === 'monday') {
        document.getElementById('placeToSee').innerHTML = 'Here we go again...'
        document.querySelector('h2').style.display = 'block'
    }
    else if (day === 'tuesday') {
        document.getElementById('placeToSee').innerHTML = 'The worst day of the week. Sorry in advance.'
        document.querySelector('h2').style.display = 'block'
    }
    else if (day === 'wednesday') {
        document.getElementById('placeToSee').innerHTML = 'Halfway there!!'
        document.querySelector('h2').style.display = 'block'
    }
    else if (day === 'thursday') {
        document.getElementById('placeToSee').innerHTML = 'If you do the math, today\'s basically the last day. Keep it rolling.'
        document.querySelector('h2').style.display = 'block'
    }
    else if (day === 'friday') {
        document.getElementById('placeToSee').innerHTML = 'You\'re free!'
        document.querySelector('h2').style.display = 'block'
    }
    else if (day  === 'saturday') {
        document.getElementById('placeToSee').innerHTML = 'Weekend!'
        document.querySelector('h2').style.display = 'block'
    }
    else if (day === 'sunday') {
        document.getElementById('placeToSee').innerHTML = 'Weekend end...'
        document.querySelector('h2').style.display = 'block'
    }
    else if (day === '') {
        alert('Please put in a day of the week')
    }
    else {
        alert('Did you misspell something?')
    }
}