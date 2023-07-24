var  likeButton = document.getElementById('likeButton');
var  likeCount = document.getElementById('likeCount');
let count = 0;

function counter(element){
    count++;
    likeCount.innerText = count;
    console.log(likeCount.innerText);
}
// ABOVE IS TOP LIKE COUNTER

// BELOW IS MIDDLE LIKE COUNTER

var  likeButtonM = document.getElementById('likeButtonM');
var  likeCountM = document.getElementById('likeCountM');
let countM = 0;

function counterM(element){
    countM++;
    likeCountM.innerText = countM;
    console.log(likeCountM.innerText);
}


// BELOW IS LOWER LIKE COUNTER

var  likeButtonL = document.getElementById('likeButtonB');
var  likeCountL = document.getElementById('likeCountB');
let countL = 0;

function counterB(element){
    count++;
    likeCountL.innerText = count;
    console.log(likeCountL.innerText);
}
