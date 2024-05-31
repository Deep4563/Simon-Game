let userSeq=[];
let gameSeq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;
let highScr=0;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started.");
        started=true;
    }
   levelUp();
});

function gameBtnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userBtnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250); 

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameBtnFlash(randBtn);
}

function checkAns(idx){
    // console.log("current level",level);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        if(highScr<level){

             highScr=level;
        }
        h2.innerHTML=`Game is over! Your score was <b> ${level}</b> <br> Press any key to start game.`;
        h3.innerText=`highest score=${highScr}`;
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
            
        },200);
        reset();
    }
}

function btnPress(){
    console.log("btn is clicked.");
    let btn=this;
    userBtnFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

 let allbtn=document.querySelectorAll(".btn");
 for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}