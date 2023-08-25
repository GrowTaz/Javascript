let kaverit = [];

const lengthLimit = 10;
let text = "";
let sortedText = "";
let backup = "";

let friendName = "";
document.getElementById("addFriend").onclick = function () {
    friendName = document.getElementById("inputBox").value;
    addFriend(friendName);
}
document.getElementById("removeFriend").onclick = function () {
    friendName = document.getElementById("inputBox").value;
    removeFriend(friendName);
}
document.getElementById("sortFriends").onclick = function () {
    kaverit.sort();
    for (let i = 0; i < kaverit.length; i++) {
        
        sortedText += "<li>" + kaverit[i] + "</li>";
        
        text = "";
        document.getElementById("lista").innerHTML = sortedText;
    }
    sortedText = "";
}







function addFriend(friend) {
    
    if (kaverit.length < lengthLimit) {
        kaverit.push(friend);
        text += "<li>" + friend + "</li>";
        document.getElementById("lista").innerHTML = text;
        
    }
    
}

function removeFriend(friend) {

    for (let i = 0; i < kaverit.length; i++) {
        

        if (kaverit[i] == friend) {
            
            kaverit.splice(i, 1);
            text = "";
            updateList();
        }
    }

    
}

function updateList() {
    for (let i = 0; i < kaverit.length; i++) {
        
        text += "<li>" + kaverit[i] + "</li>";
        
        document.getElementById("lista").innerHTML = text;
    }
    if (kaverit.length == 0) {
        document.getElementById("lista").innerHTML = "";
    }
}