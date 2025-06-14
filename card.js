const artcards= document.querySelectorAll('.artcard');
const popupOverlay= document.getElementById('popupOverlay');
const popupimg= document.getElementById('popupimg');
const popuptitle= document.getElementById('popupname');
const popupartist= document.getElementById('popupartist');
const closebtn= document.querySelector('.close-btn');
const popupheart= document.getElementById('popuphearticon');
const popupcount=document.getElementById('popuplikecount');

let currentcard=null;

artcards.forEach(card =>{
    card.addEventListener('click', function(){
        currentcard = card;

        const imgElem = card.querySelector('.artimage img');
        const imgsrc = imgElem ? imgElem.src : '';
        const title = card.querySelector('.artname').textContent;
        const artist = card.querySelector('.artist').textContent;

        const cardlike= card.querySelector('.hearticon');
        const cardcount= card.querySelector('.likecount');
        
        popupimg.src=imgsrc;
        popuptitle.textContent= title;
        popupartist.textContent=artist;

        popupheart.src = cardlike.src;

        popupcount.textContent = cardcount.textContent;

        popupOverlay.style.display='flex';
        
    });
});

popupheart.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentcard) return;

    const cardlike = currentcard.querySelector('.hearticon');
    const cardcount = currentcard.querySelector('.likecount');

    const isLiked = popupheart.src.includes("heart1.png");
    
    if (isLiked) {
        cardcount.textContent = Math.max(0, parseInt(cardcount.textContent) - 1);
    } else {
        cardcount.textContent = parseInt(cardcount.textContent) + 1;
    }

    const newsrc= isLiked ? "assets/heart.png" : "assets/heart1.png";
    popupheart.src = newsrc;
    cardlike.src= newsrc;
    popupcount.textContent = cardcount.textContent;
});

closebtn.addEventListener('click', function(){
    popupOverlay.style.display='none';
    currentcard=null;
});

popupOverlay.addEventListener('click', function(e){
    if(e.target === popupOverlay){
        popupOverlay.style.display = 'none';
        currentcard=null;
    }
});


document.querySelectorAll(".hearticon").forEach(x => {
    let liked = x.src.includes("heart1.png");

    const likecount = x.parentElement.querySelector(".likecount");
    let count = parseInt(likecount.textContent, 10)||0;

    x.addEventListener("click", (event) => {
        event.stopPropagation();
        liked = !liked;
        if(liked){
            x.src="assets/heart1.png";
            count++;
        } else {
            x.src="assets/heart.png";
            count--;
        }
        likecount.textContent = count;

        if(currentcard === x.closest('.artcard')){
            popupheart.src =x.src;
            popupcount.textContent= count;
        }
    });

});

