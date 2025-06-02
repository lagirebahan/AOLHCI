document.getElementById('submissionform').addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const title = document.getElementById("titlepost").value.trim();
    const poster = document.getElementById("poster").value.trim();
    const desc = document.getElementById("descpost").value.trim();
    const tags = document.getElementById("posttags").value.trim();
    const file = document.getElementById("file").files[0];
    const airadio = document.querySelector('input[name="aigen"]:checked');

    let isValid = true;

    if(email === ''){
        isValid = false;
        document.getElementById('emailerror').textContent="Email is required";

    } else if(!email.includes("@") || !email.includes(".")){
        isValid=false;
        document.getElementById('emailerror').textContent="Use a proper email";
    }

    if(title === ''){
        isValid = false;
        document.getElementById('titleerror').textContent="A title is required";
    } else if(title && (title.length < 5 || title.length > 100)){
        isValid=false;
        document.getElementById('titleerror').textContent="Title should be 5-100 characters";
    }

    if(poster === ''){
        isValid = false;
        document.getElementById('postererror').textContent="Your name/alias is required";

    }

    if(desc === ''){
        isValid = false;
        document.getElementById('descerror').textContent="Write a short description";

    }

    if(tags === ''){
        isValid = false;
        document.getElementById('tagserror').textContent="Please select at least one tag";

    }

    if(!file){
        isValid = false;
        document.getElementById('descerror').textContent="Please upload a file";

    }

    if(!airadio){
        isValid = false;
        document.getElementById('tagserror').textContent="Please select one of the options";
    } 

    if(isValid){
        alert("Your work has successfully been submitted!");
    }
});
