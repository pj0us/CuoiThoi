const modal = document.querySelector ('.js-modal')
const modalClose = document.querySelector ('.js-modal-close')
const modalContainer = document.querySelector ('.js-modal-container')

function move(elm) {
    elm.style.possiton = 'absolute'
    elm.style.top = Math.floor(Math.random() * 80) + '%'
    elm.style.right = Math.floor(Math.random()* 80) + '%'
}

function showForm() {
    modal.classList.add('open')
}

function closeForm() {
    modal.classList.remove('open')
}

var btn = document.querySelector('#no');
btn.addEventListener('mouseover', function(e) { 
    move(e.target)
})

var btn = document.querySelector('#yes');
btn.addEventListener('click', showForm);

const music = ['music','music2','music3']
let random = music[Math.floor(Math.random()*music.length)]

btn.addEventListener('click', function() {
    random = music[Math.floor(Math.random()*music.length)]
    var audio = document.getElementById(random);
    audio.play(true);
    audio.volume = 0.5
})

modalClose.addEventListener('click', closeForm);
modalClose.addEventListener('click', function() {
    var audio = document.getElementById(random);
    audio.load();
})
modal.addEventListener('click', closeForm);
modal.addEventListener('click', function() {
    var audio = document.getElementById(random);
    audio.load();
})
