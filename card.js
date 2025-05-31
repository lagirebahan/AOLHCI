const artcards= document.querySelectorAll('.artcard');
const popupOverlay= document.getElementById('popupOverlay');
const popupimg= document.getElementById('popupimg');
const popuptitle= document.getElementById('popupname');
const popupartist= document.getElementById('popupartist');
const closebtn= document.querySelector('.close-btn');

artcards.forEach(card =>{
    card.addEventListener('click', function(){
        const imgsrc = this.querySelector('.artimage img').src;
        const title = this.querySelector('.artname').textContent;
        const artist = this.querySelector('.artist').textContent;
        popupimg.src=imgsrc;
        popuptitle.textContent= title;
        popupartist.textContent=artist;
        popupOverlay.style.display='flex';

    });
});

closebtn.addEventListener('click', function(){
    popupOverlay.style.display='none';
});

popupOverlay.addEventListener('click', function(e){
    if(e.target === popupOverlay){
        popupOverlay.style.display = 'none';
    }
});