var player1Count=0;
var player2Count=0;
var round=0;
function func(x){
    document.querySelectorAll(x+" .dot").forEach(makeInvisible);
    var num = Math.floor(Math.random()*6)+1;
    console.log(num);
    if(num==1){
        document.querySelectorAll(x+" .one").forEach(makeVisible);
    }else if(num==2){
        document.querySelectorAll(x+" .two").forEach(makeVisible);
    }else if(num==3){
        document.querySelectorAll(x+" .three").forEach(makeVisible);
    }else if(num==4){
        document.querySelectorAll(x+" .four").forEach(makeVisible);
    }else if(num==5){
        document.querySelectorAll(x+" .five").forEach(makeVisible);
    }else if(num==6){
        document.querySelectorAll(x+" .six").forEach(makeVisible);
    }
    return num;
}
function main(){
    round++;
    var player1 = func(".rightmargin");
    var player2 = func(".leftmargin");
    if(player1>player2){
        document.querySelector("h1").textContent="Player 1 won the round number "+round;
        player1Count++;
    }else if(player2>player1){
        document.querySelector("h1").textContent="Player 2 won the round number "+round;
        player2Count++;
    }else{
        document.querySelector("h1").textContent="the round number "+round+" is a tie!";
    }
    document.querySelector(".name1").textContent="player 1 score : "+player1Count;
    document.querySelector(".name2").textContent="player 2 score : "+player2Count;
}
function end(){
    if(round == 0){
        alert("there's no match to end!");
        return;
    }
    round=0;
    var points = 0;
    if(player1Count>player2Count){
        points = player1Count-player2Count;
        document.querySelector("h1").textContent="Player 1 won the match by "+points+" points!";
        player1Count=0;
        player2Count=0;
    }else if(player2Count>player1Count){
        points = player2Count-player1Count;
        document.querySelector("h1").textContent="Player 2 won the match by "+points+" points!";
        player2Count=0;
        player1Count=0
    }else{
        document.querySelector("h1").textContent="the match ended with a tie!";
        player1Count=0;
        player2Count=0;
    }
    document.querySelectorAll(".dot").forEach(makeInvisible);
}
function makeInvisible(x){
    x.classList.add("invisible");
}
function makeVisible(x){
    x.classList.remove("invisible");
}