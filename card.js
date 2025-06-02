const artcards= document.querySelectorAll('.artcard');
const popupOverlay= document.getElementById('popupOverlay');
const popupimg= document.getElementById('popupimg');
const popuptitle= document.getElementById('popupname');
const popupartist= document.getElementById('popupartist');
const closebtn= document.querySelector('.close-btn');

const popupheart= document.querySelector('.popuphearticon');
const popupcount=document.querySelector('.popuplikecount');

artcards.forEach(card =>{
    card.addEventListener('click', function(){
        

        const imgsrc = card.querySelector('.artimage img').src;
        const title = card.querySelector('.artname').textContent;
        const artist = card.querySelector('.artist').textContent;

        const cardlike= card.querySelector('.hearticon');
        const cardcount= card.querySelector('.likecount');

        const liked = cardlike.src.includes("heart (1).png");
        
        popupimg.src=imgsrc;
        popuptitle.textContent= title;
        popupartist.textContent=artist;

        popupheart.src = liked ? "assets/heart (1).png" : "assets/heart.png";

        popupcount.textContent = cardcount.textContent;


        popupOverlay.style.display='flex';


        popupheart.onclick = function (e) {
            e.stopPropagation();
            if (!cardlike || !cardcount) return;

            const isLiked = popupheart.src.includes("heart (1).png");
            if (isLiked) {
                popupheart.src = "assets/heart.png";
                cardlike.src = "assets/heart.png";
                cardcount.textContent = Math.max(0, parseInt(cardcount.textContent) - 1);
            } else {
                popupheart.src = "assets/heart (1).png";
                cardlike.src = "assets/heart (1).png";
                cardcount.textContent = parseInt(cardcount.textContent) + 1;
            }
            popupcount.textContent = cardcount.textContent;
        };
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

document.querySelectorAll(".hearticon").forEach(x => {
    let liked = false;

    const likecount = x.parentElement.querySelector(".likecount");
    let count = parseInt(likecount.textContent,10)||0;

    x.addEventListener("click", (event) => {
        event.stopPropagation();
        liked = !liked;
        if(liked){
            x.src="assets/heart (1).png";
            count++;
        } else {
            x.src="assets/heart.png";
            count--;
        }
        likecount.textContent = count;
    });

});

