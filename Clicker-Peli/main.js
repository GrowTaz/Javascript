let cookie = document.getElementById('cookie');
let passivecookie = document.getElementById('passivecookie');
let doublecookie = document.getElementById('doublecookie');
let doublecookieCounter = document.getElementById('dcookies');
let passivecookieCounter = document.getElementById('pcookies');
let doubleCost = document.getElementById('doublecost');
let passiveCost = document.getElementById('passivecost');
let score = document.getElementById('score');
let restScore = 0;
let rotationAngle = 0;
let cookieMultiplier = 1;
let cookieSpeed = 0.5;
let doubleCookieLevel = 0;
let passiveCookieLevel = 0;
let cookieIncrement = 1;
let defaultDoubleCookie = 10;
let isPassiveLoopRunning = false;
let defaultPassiveCookie = 25;
cookie.onclick = function () {
    rotationAngle += 8;
    cookie.style.transform = `rotate(${rotationAngle}deg)`;
    restScore = restScore + cookieMultiplier;
    score.innerHTML = restScore
    checkCookies();
}
cookie.ondragstart = () => {
    return false;
  };

passivecookie.onclick = function () {
    if (passiveCookieLevel === 3){
        
        return;
    }
    if(restScore >= defaultPassiveCookie){
        restScore -= defaultPassiveCookie;
        score.innerHTML = restScore
        checkCookies();
        passiveCookieLevel += 1;
        decideLevel();
    }
    
}
doublecookie.onclick = function () {
    if (doubleCookieLevel === 2){
        return;
    }
    console.log(defaultDoubleCookie);
    if(restScore >= defaultDoubleCookie){
        restScore -= defaultDoubleCookie;
        score.innerHTML = restScore
        checkCookies();
        doubleCookieLevel += 1;
        decideLevel();
        
        console.log("yes")
    }
    else{
        doublecookie.style.backgroundColor ='red';
    }
    
    
}
const doublecookieUpgrade = {
    get lvl1(){
        cookieMultiplier = 2;
    },
    get lvl2(){
        cookieMultiplier = 3;
    }

}

const doublecookieRequirement = {
    get lvl2(){
        defaultDoubleCookie = 40;
    }
}

const passivecookieUpgrade = {
    get lvl1(){
        cookieIncrement = 1;
    },
    get lvl2(){
        cookieIncrement = 2;
    },
    get lvl3(){
        cookieIncrement = 3;
    }
}

const passivecookieRequirement = {
    get lvl1(){
        defaultPassiveCookie = 80;
    },
    get lvl2(){
        defaultPassiveCookie = 180;
    }
}

function decideLevel(){
        switch (passiveCookieLevel){
        case 1:
            passiveCookies();
            passivecookieCounter.innerHTML = "Lvl1 ";
            passiveCost.innerHTML = "80 points";
            passivecookieUpgrade.lvl1;
            passivecookieRequirement.lvl1;
            
            break;
        case 2:
            passivecookieCounter.innerHTML = "Lvl2 ";
            passiveCost.innerHTML = "180 points";
            passivecookieUpgrade.lvl2;
            passivecookieRequirement.lvl2;
            cookieSpeed = 2;
            break;
        case 3:
            passivecookieCounter.innerHTML = "Lvl3 ";
            passiveCost.innerHTML = "Max level reached";
            console.log(passiveCookieLevel)
            passivecookieUpgrade.lvl3;
    }
    switch(doubleCookieLevel){
        case 1:
            doublecookieCounter.innerHTML = "Lvl1 ";
            doubleCost.innerHTML = "40 points";
            doublecookieUpgrade.lvl1;
            doublecookieRequirement.lvl2;
            break;
        case 2:
            doublecookieCounter.innerHTML = "Lvl2 ";
            doubleCost.innerHTML = "max level reached";
            doublecookieUpgrade.lvl2;
    }
}

async function passiveCookies(){
    if (isPassiveLoopRunning) return;
    isPassiveLoopRunning = true;
    spinCookie();
    while (true){

        restScore += cookieIncrement;
        score.innerHTML = restScore;
        checkCookies();
        await new Promise(r => setTimeout(r, 1000));
    }
}
async function spinCookie(){
    while (true){
        rotationAngle += cookieSpeed;
        cookie.style.transform = `rotate(${rotationAngle}deg)`;
        await new Promise(r => setTimeout(r, 100));

    }
}

function checkCookies(){
    if(restScore >= defaultDoubleCookie && doubleCookieLevel < 2){
        doublecookie.style.backgroundColor = 'green';
    }
    else if (doubleCookieLevel >= 2){
        doublecookie.style.backgroundColor ='red';
    }
    if(restScore >= defaultDoubleCookie === false){
        doublecookie.style.backgroundColor ='red';
    }
    if (restScore >= defaultPassiveCookie && passiveCookieLevel < 3){
        passivecookie.style.backgroundColor = 'green';
    }
    else if (passiveCookieLevel >= 3){
        passivecookie.style.backgroundColor ='red';
    }
    else {
        console.log("hihihii")
        console.log(defaultDoubleCookie)
        console.log(restScore)
        passivecookie.style.backgroundColor ='red';
        
    }
}