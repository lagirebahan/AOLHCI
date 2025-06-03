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

    document.querySelectorAll('.error').forEach(x => x.style.display = 'none');

    if(email === ''){
        isValid = false;
        document.getElementById('emailerror').textContent="Email is required";
        document.getElementById('emailerror').style.display = 'block';
    } else if(!email.includes("@") || !email.includes(".")){
        isValid=false;
        document.getElementById('emailerror').textContent="Use a proper email";
        document.getElementById('emailerror').style.display = 'block';
    }

    if(title === ''){
        isValid = false;
        document.getElementById('titleerror').textContent="A title is required";
        document.getElementById('titleerror').style.display = 'block';
    } else if(title && (title.length < 5 || title.length > 100)){
        isValid=false;
        document.getElementById('titleerror').textContent="Title should be 5-100 characters";
        document.getElementById('titleerror').style.display = 'block';
    }

    if(poster === ''){
        isValid = false;
        document.getElementById('postererror').textContent="Your name/alias is required";
        document.getElementById('postererror').style.display = 'block';
    }

    if(desc === ''){
        isValid = false;
        document.getElementById('descerror').textContent="Write a short description";
        document.getElementById('descerror').style.display = 'block';
    }

    if(tags === ''){
        isValid = false;
        document.getElementById('tagserror').textContent="Please select at least one tag";
        document.getElementById('tagserror').style.display = 'block';
    }

    if(!file){
        isValid = false;
        document.getElementById('fileerror').textContent="Please upload a file";
        document.getElementById('fileerror').style.display = 'block';
    }

    if(!airadio){
        isValid = false;
        document.getElementById('radioerror').textContent="Please select one of the options";
        document.getElementById('radioerror').style.display = 'block';
    } 

    if(isValid){
        alert("Your work has successfully been submitted!");
        document.getElementById("submissionform").reset();
    }
});
