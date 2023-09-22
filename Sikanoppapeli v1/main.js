
diceBtn = document.getElementById('diceBtn');
diceImg = document.getElementById('diceImg');
points = document.getElementById('points');
unsecuredPoints = document.getElementById('unsecuredPoints');
endRoundButton = document.getElementById('endRound');
player = document.getElementById('player');
let unsafePoints = 0;
let queue = 0
const players = prompt("Player count: ");
const requiredPoints = prompt('Required points to win:');
const people = [];


for (let i = 0; i < players; i++){
    playerName = prompt(`Choose your username, player ${i +1}/${players}`);
    const person = {
        username: playerName,
        points: 0
    };
    people.push(person);
}

document.addEventListener('DOMContentLoaded', function() {
    loadPlayerData();
    endRoundButton.disabled = true;
});

diceBtn.onclick = function () {
    if (players > 0) {
        throwDice();
    }

}
endRoundButton.onclick = function () {
    unsecuredPoints.innerHTML = "";
    endRoundButton.disabled = true;
    people[queue].points += unsafePoints;
    unsafePoints = 0;
    console.log("points updated to player " + people[queue].username + ": " + people[queue].points)
    
    
    
    checkWin(people[queue].points);
    queue += 1;
    if (queue >= players ){
        refreshRound();
        return;
    }
    loadPlayerData();
    console.log("switched to player: " + queue + " " + people[queue].username + ": " + people[queue].points);
}

function loadPlayerData() {
    
    player.innerHTML = people[queue].username;
    points.innerHTML = people[queue].points;
}

function refreshRound(){
    endRoundButton.disabled = true;
    console.log("refreshed")
    queue = 0;
    unsecuredPoints.innerHTML = "";
    loadPlayerData();
}

function throwDice() {
    let drawDice = getRandomInt(5)
    if (drawDice == 0){
        alert('Your round is over');
        unsecuredPoints.innerHTML = "";
        unsafePoints = 0;
 
        queue += 1;
        if (queue >= players ){
            refreshRound();
            return;
        }
        loadPlayerData();
        return;
    }
    
    console.log(people[queue].username);
    diceImg.src = `dicePics/d${drawDice}.gif`;
    unsafePoints += drawDice +1;
    unsecuredPoints.innerHTML = unsafePoints;
    
    endRoundButton.disabled = false;
    
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function checkWin(points){
    if (points >= requiredPoints){
        alert(`Player ${people[queue].username} has won with ${people[queue].points}!`)
        window.location.reload();
    }
}