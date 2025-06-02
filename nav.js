const toggle = document.getElementById("hamburger");
const navlinks = document.getElementById("navlink");

toggle.addEventListener('click',()=>{
    navlinks.classList.toggle('show');
});