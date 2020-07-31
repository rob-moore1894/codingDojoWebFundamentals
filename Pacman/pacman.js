//JS Display world of bricks/coins/etc
var world = [
    [2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,2,2,2,2,1,1,1,2],
    [2,1,1,1,1,1,2,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2]
];

var score = 0;

var pacman = {
    x: 1,
    y: 1,
}

function displayWorld(){
    var output = '';

    for (var i = 0; i < world.length; i++){
        output += "<div class = 'row'>"
        for (var j = 0; j < world[i].length; j++){
            if(world[i][j] == 2){
                output += "<div class='brick'></div>";
            } else if(world[i][j] == 1){
                output += "<div class='coin'></div>";
            } else if(world[i][j] == 0){
                output += "<div class='empty'></div>"
            }
        }
        output += "</div>"
    }
    document.getElementById('world').innerHTML = output; 
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}


displayWorld();
displayPacman();
displayScore();




//Move character up and down 
document.onkeydown = function(e){
    if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){ // down keyCode: 40
        pacman.y++;
    } else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){ // up keyCode: 38
        pacman.y--;
    } else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){ // right keyCode: 39
        pacman.x++;
    } else if (e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){ // left keyCode: 37
        pacman.x--;
    }
    displayPacman();
    if (world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score++
        displayWorld();
        displayScore();
    }
    
}




