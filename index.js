function game(player){
    console.log(player);
    let comp = Math.ceil(Math.random() * 3);
    console.log(comp);

    if(player == 1)
    document.playerDecision.src = "img/snake.png";

    else if(player == 2)
    document.playerDecision.src = "img/water.png";

    else if(player == 3)
    document.playerDecision.src = "img/gun.png";
    
    if(comp == 1)
    document.computerDecision.src = "img/snake.png";

    else if(comp == 2)
    document.computerDecision.src = "img/water.png";

    else if(comp == 3)
    document.computerDecision.src = "img/gun.png";

    let win = (player == 1 && comp == 2) || (player == 2 && comp == 3) ||  (player == 3 && comp == 1);


    if(player == comp){
        document.getElementById("result").innerHTML = `Game Tied`;
        document.getElementById("playerDecision").style.border = "none";  
        document.getElementById("compDecision").style.border = "none"; 
    }
    

    else if(win){
        document.getElementById("result").innerHTML = `Congratulations! You Won`;
        document.getElementById("playerDecision").style.border = "2px solid black"; 
        document.getElementById("compDecision").style.border = "none";
    }
    

    else{
        document.getElementById("result").innerHTML = `You Lost`;
        document.getElementById("compDecision").style.border = "2px solid black";
        document.getElementById("playerDecision").style.border = "none";  
    }
    
}
