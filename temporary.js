// popupheart.addEventListener("click", (event) =>{
//     event.stopPropagation();
//     if(!current) return;

//     const cardlike= current.querySelector('.hearticon');
//     const cardcount= current.querySelector('.likecount');
//     let count = parseInt(cardcount.textContent,10)||0;
//     let liked=popupheart.src.includes("heart (1).png");

//     if(liked){
//         popupheart.src = "assets/heart.png";
//         cardlike.src = "assets/heart.png";
//         count--;
//     } else {
//         popupheart.src = "assets/heart (1).png";
//         cardlike.src = "assets/heart (1).png";
//         count++;
//     }
//     popupcount.textContent=count;
//     cardcount.textContent=count;
// });