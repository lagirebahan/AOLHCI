const forumcontent = document.getElementById('forumcontentid');

const submitbutton = document.getElementById('submitpost');
submitbutton.addEventListener('click', function(){
    submitpost();
});

function submitpost(){
    const titleInput = document.getElementById('titlepost');
    const title = titleInput.value;
    const descInput = document.getElementById('descpost');
    const desc = descInput.value;
    const authorInput = document.getElementById('poster');
    const author = authorInput.value;
    const date = new Date().toLocaleDateString();

    const newpost = {
        title,
        desc,
        author,
        date,
        replies:[
            "You've come to the right place",
            "I can help",
            "Try to search online."
        ]
    };

    create(newpost);
    titleInput.value = '';
    descInput.value = '';
    authorInput.value = '';
}

function create({title, desc, author, date, replies}) {
    const post = document.createElement('div');
    post.className = 'posts';

    post.innerHTML = `
    <h2 class="title"> ${title}</h2>
    <p>${desc}</p>
    <div class="postinfo">
        <span class="author">
            <img src="assets/account.png" alt="Profile"> ${author || "Unknown"}
        </span>
        <span class="time">${date}</span>
        <span class="repliescount">${replies.length} replies</span>
    </div>
    <div class="replies"></div>
    `;

    post.addEventListener("click", () => {
        const repliessection = post.querySelector('.replies');
        if(repliessection.style.display ==='none' || repliessection.style.display === ''){
            repliessection.style.display='block';
            repliessection.innerHTML = replies.map(reply => `<div>- ${reply}</div>`).join('');
        } else {
            repliessection.style.display='none';
        }
    });

    forumcontent.prepend(post);
}

// create(post1);
// create(post2);
// create(post3);



// const recentPosts = [
//   { title: "How to align items with Flexbox?", author: "Ali", time: "3 mins ago" },
//   { title: "CSS Grid vs Flexbox", author: "Maria", time: "10 mins ago" },
//   { title: "JS for Beginners", author: "Daniel", time: "25 mins ago" },
// ];

// const recentContainer = document.getElementById("recentPosts");

// recentPosts.forEach(({ title, author, time }) => {
//   const post = document.createElement("div");
//   post.className = "recent-post";
//   post.innerHTML = `
//     <div class="recent-post-title">${title}</div>
//     <div class="recent-post-meta">By ${author} · ${time}</div>
//   `;
//   recentContainer.appendChild(post);
// });

const builtinreplies = [
    "i dont know man",
    "idk man"
];

const static = document.querySelector('.posts:nth-child(1)');
const repliesSection = static.querySelector('.replies');
const repliesCount= static.querySelector('.repliescount');
repliesCount.textContent = `${builtinreplies.length} replies`;

static.addEventListener("click", () =>{
    if(repliesSection.style.display ==='none' || repliesSection.style.display === ''){
            repliesSection.style.display='block';
            repliesSection.innerHTML = builtinreplies.map(reply => `<div>- ${reply}</div>`).join('');
        } else {
            repliesSection.style.display='none';
        }
})

document.querySelector('.createbutton').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('.modal').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});

window.addEventListener('click', function(e) {
    const modal = document.getElementById('.modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelector('#submitpost').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});