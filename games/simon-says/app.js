let gameSeq = [];
let userSeq = [];

let started = false;
let level  = 0;

let h2 = document.querySelector('h2');

let btns = ["yellow","red","purple","green"];

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("game-flash");
    setTimeout(function(){
        btn.classList.remove("game-flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log("Game sequence: ",gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br> Press any key to Start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector('body').style.backgroundColor = "white";
        },150);
        resetGame();
    }
}
function btnPress(){
   let btn = this;
   userFlash(btn);
   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   console.log("User sequence : " ,userSeq);
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function resetGame(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}