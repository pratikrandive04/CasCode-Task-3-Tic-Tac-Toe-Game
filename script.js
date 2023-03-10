console.log("Welcome To Tic Tac Toe Game");

let turn = "X";

let gameOver = false;

//Function To Change The Turn
const changeTurn = ()=>{

    return turn === "X"?"O": "X";
}

//Function To Check Winner

const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ]
    wins.forEach(e=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !=="")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Has Won The Game";
            gameOver = true;
            document.querySelector('.line').style.width = `30vw`
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
            }
        }
    })
})

//Reset Button

reset.addEventListener('click' , ()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element=>{
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
    document.querySelector('.line').style.width = `0vw`
})