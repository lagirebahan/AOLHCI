const hearticon = document.querySelectorAll(".hearticon");

hearticon.forEach(x => {
    let liked = false;

    x.addEventListener("click", () => {
        liked = !liked;
        if(liked){
            x.src="assets/heart (1).png";
        } else {
            x.src="assets/heart.png";
        }

    });

});

