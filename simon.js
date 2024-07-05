let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function (){
    if(started==false){
        console.log("game started");
        started=true;


        levelUp();
    }
});
 
function gameflash(btn) {
 let list=btn.classList;
 list.add("flash");
 setTimeout(function(){
  list.remove("flash");
 },300);
}

function userflash(btn) {
    let list=btn.classList;
    list.add("userflash");
    setTimeout(function(){
     list.remove("userflash");
    },300);
   }

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);


    gameflash(randbtn);
}
function checkAns(idx){
if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);

    }
}else{
h2.innerHTML=`game over! your score is ${level} press any key to start.`
reset();
}
}

function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
 let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}
allbtns=document.querySelectorAll(".btn");

for(input of allbtns){
    input.addEventListener("click",btnpress);
}
function reset(){
started=false;
gameseq=[];
userseq=[];
level=0;
}