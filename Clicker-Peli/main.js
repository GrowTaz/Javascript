let cookie = document.getElementById('cookie');
let score = document.getElementById('score');
let restScore = 0;
let rotationAngle = 0;
cookie.onclick = function () {
    rotationAngle += 7;
    cookie.style.transform = `rotate(${rotationAngle}deg)`;
    restScore = restScore + 1;
    score.innerHTML = restScore
}
cookie.ondragstart = () => {
    return false;
  };