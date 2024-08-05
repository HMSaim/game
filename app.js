let arr =[];
let gause =[];
let userGuse =[];
let level =0;
let btns =["red","green","yellow","blue"]
let h3=document.querySelector("h3");
let h4=document.querySelector("h4");

let start =false;
document.addEventListener("keypress",function(){
    if(start==false){
start=true;
console.log("start");

levelUp();
}
})

function btnFlash(btn){
    
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);

}
function userbtnFlash(btn){
    
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);

}

function levelUp() {
    userGuse=[];
    level++;
   
    h3.innerText=`Level ${level}`;
let randomIndx =Math.floor(Math.random() * 3);
let randomColor =btns[randomIndx];
let randomBtn =document.querySelector(`.${randomColor}`);
//console.log(randomColor);
gause.push(randomColor);
console.log(gause);
    btnFlash(randomBtn);
}
function checkAns(indx){
//console.log(level);
if(userGuse[indx] === gause[indx]){
if(userGuse.length == gause.length){
    setTimeout(levelUp,1000);
}
}
else{
    h3.innerHTML=`Game over <b> level ${level}</b> <br>press any key to start`;
    let a=level;
    
    arr.push(a);
    h4.innerHTML=`HighScore is<br> ${Math.max(...arr)}`
    reset();
   
  
  
    level=0;
}

}
let allBtns=document.querySelectorAll(".btn");
for(btnss of allBtns){
    btnss.addEventListener("click",btnPress);
}
function btnPress() {
    let btn =this;
    //console.log(btn)
    userbtnFlash(btn);
    
userColor =btn.getAttribute("id")
    userGuse.push(userColor);
    checkAns(userGuse.length-1);
}
function reset(){
    start=false;
    gause =[];
    userGuse =[];
   // level = 0;
}