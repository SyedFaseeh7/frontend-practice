//Selecting Elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-Container");
let newGameBtn = document.querySelector("#new-btn");
let winMsg = document.querySelector("#msg");

//Game turn management
let turnX = true;
let moveCount = 0;//To track the number of moves

//Winning patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 
//Reset and New Game button functionality
const resetGame = () => {
     turnX = true;
     moveCount=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
//Handling clicks
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(box,innerText = "" );// Only make a move if the box is not already filled
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="0";
            turnX=true
        }

        box.disabled=true;//Boxes get disabled one by one after a user clicks them
        moveCount++;// Increment move count after each click

        checkWinner();// Check for winner after each move
        checkDraw(); // Check for draw condition after each move
    });
});
 
//Fuction to check if match is Draw.
const checkDraw = () => {
    if (moveCount === 9) { // When all 9 moves are made
        let allFilled = true;
        for (let box of boxes) {
            if (box.innerText === "") {
                allFilled = false; // If any box is empty, it's not a draw
                break;
            }
        }

        if (allFilled) {
            showDraw();
        }
    }
};

// Function to show draw message
const showDraw = () => {
    winMsg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes(); // Disable all boxes after draw
};


const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;// Disables the box, preventing further clicks
        /*It is called -:After a winner is declared (so no one can make more moves),
        -:After a draw is declared (because the game is over).*/
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;//Enables the box for clicking
        box.innerText="";// Clears the content of the box
    }
}

 const showWinner = (winner) => {
    winMsg.innerText = `Congragulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWinner = ()  => {
for(let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
     
    if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
           showWinner(pos1Val);// If winner found, show the winner
           return;// Stop checking further once a winner is found
        }
    }
    
  }

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);