let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Reset");
let newbtn=document.querySelector("#newgame");
let winmsg=document.querySelector(".winmsg");
let msg=document.querySelector(".msg");
let resetbtn=document.querySelector("#Reset");

let turnO=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        box.innerHTML="O";
        turnO=false;
       }else{
        box.innerHTML="X";
        turnO=true;
       }
       box.disabled=true;
       checkWinner();
    })
})
 

const checkWinner=()=>{
    for(let pattern of winpatterns ){
       let pos1val=boxes[pattern[0]].innerHTML;
       let pos2val=boxes[pattern[1]].innerHTML;
       let pos3val=boxes[pattern[2]].innerHTML;

       if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            showWinner(pos1val);
        }
       }
    }
}
const showWinner=(winner)=>{
    winmsg.innerText=`Congratulations Winner is ${winner}`;
    msg.classList.remove("hide");
    disable();
}

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enable();
    msg.classList.add("hide");
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
