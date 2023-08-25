const kaverit = [];

const lengthLimit = 10;

let text = "";

while (kaverit.length < lengthLimit) {
hihi = prompt("Lisää kaveri")
kaverit.push(hihi);
text += "<li>" + hihi + "</li>";

}
document.getElementById("lista").innerHTML = text;