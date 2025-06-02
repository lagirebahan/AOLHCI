// const toggle = document.getElementById("menu-toggle");
// const links = document.querySelector(".linkclass");

// toggle.addEventListener("click", () => {
//     links.classList.toggle("show");
// });

document.getElementById('details').addEventListener("click", function(){
    window.location.href="gallery.html";
});

document.getElementById('details').style.transition= 'background-color 0.2s ease, transform 0.2s ease';

document.getElementById('details').addEventListener("mouseenter", function(){
    this.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    this.style.transform = 'scale(1.1)';
});

document.getElementById('details').addEventListener("mouseleave", function(){
    this.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    this.style.transform = 'scale(1)';
});


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img')
const buttons = document.querySelectorAll('.slider-nav a.slide-button');
const leftbutton = document.querySelector('.left-slide');
const rightbutton = document.querySelector('.right-slide');

const artistName = ['artist1','artist2','artist3'];
const artistNameElement = document.getElementById('artistname');


let current = 0;
const slidetimer = 5000;
const slidewidth = slides[0].clientWidth;
let slideInterval;

function gotoslide(index){
    slider.scrollTo({
        left: slidewidth*index,
        behavior: 'smooth'
    });

    updateActive(index);
    updateArtistName(index);
}

leftbutton.addEventListener("click", function(event){
    event.preventDefault();
    current = (current - 1 + slides.length)%slides.length;
    gotoslide(current);
    resettimer();
})

rightbutton.addEventListener("click", function(event){
    event.preventDefault();
    nextslide();
    resettimer();
})

function nextslide(){
    current = (current+1)%slides.length;
    gotoslide(current);
}

function updateActive(index) {
    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i===index);
    });
}

function updateArtistName(index) {
    artistNameElement.textContent = artistName[index];
}

function starttimer(){
    slideInterval = setInterval(nextslide, slidetimer);
}

function resettimer(){
    clearInterval(slideInterval);
    starttimer();
}

buttons.forEach((btn,i)=> {
    btn.addEventListener("click", function(event){
        event.preventDefault();
        current = i;
        gotoslide(current);
        resettimer();
    })
})

gotoslide(0);
updateActive(0);
starttimer();





