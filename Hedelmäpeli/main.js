
gameBtn = document.getElementById('gameBtn');
fruit1 = document.getElementById('fruit1');
fruit2 = document.getElementById('fruit2');
fruit3 = document.getElementById('fruit3');
fruit4 = document.getElementById('fruit4');
fruit5 = document.getElementById('fruit5');
fruitLock1 = document.getElementById('lock1');
fruitLock2 = document.getElementById('lock2');
fruitLock3 = document.getElementById('lock3');
fruitLock4 = document.getElementById('lock4');
fruitLock5 = document.getElementById('lock5');
bal = document.getElementById('balance');
bet = document.getElementById('bet');
winAmount = document.getElementById('winnings');
respinStatus = document.getElementById('respinStatus');
let defaultBal = 50;
let defaultBet = 1;
let reSpin = false;
let newRound = false;
let sevenCounter = 0;
kaching = new Audio('/sounds/kaching.mp3');
const fruit1Src = fruit1.src;
const numberMatch = fruit1Src.match(/\/(\d+)\.png$/);
let results = [];

function setBet(amount) {
    bet.innerHTML = amount;
    defaultBet = amount;
}



document.addEventListener('DOMContentLoaded', function() {
    bal.innerHTML = defaultBal;
    bet.innerHTML = defaultBet;
    fruitLock1.enabled = false;
    fruitLock2.enabled = false;
    fruitLock3.enabled = false;
    fruitLock4.enabled = false;
});

gameBtn.addEventListener('click', function(){
    throwDice();
});

function lockFruit(fruit) {
    if (reSpin && sevenCounter != 3) {
        
        if (lockedFruits[`Fruit${fruit}`] === true) {
            console.log("deselected",fruit);
            switch (fruit) {
                case 1:
                    fruitLock1.style.backgroundColor = "transparent";
                    lockedFruits[`Fruit${fruit}`] = false;
                    break;
                case 2:
                    fruitLock2.style.backgroundColor = "transparent";
                    lockedFruits[`Fruit${fruit}`] = false;
                    break;
                case 3:
                    fruitLock3.style.backgroundColor = "transparent";
                    lockedFruits[`Fruit${fruit}`] = false;
                    break;
                case 4:
                    fruitLock4.style.backgroundColor = "transparent";
                    lockedFruits[`Fruit${fruit}`] = false;
                    break;
            }
        } else if (lockedFruits[`Fruit${fruit}`] === false) {
            console.log("selected", fruit);
            switch (fruit) {
                case 1:
                    fruitLock1.style.backgroundColor = "red";
                    lockedFruits[`Fruit${fruit}`] = true;
                    
                    break;
                case 2:
                    fruitLock2.style.backgroundColor = "red";
                    lockedFruits[`Fruit${fruit}`] = true;
                    
                    break;
                case 3:
                    fruitLock3.style.backgroundColor = "red";
                    lockedFruits[`Fruit${fruit}`] = true;
                    
                    break;
                case 4:
                    fruitLock4.style.backgroundColor = "red";
                    lockedFruits[`Fruit${fruit}`] = true;
                    
                    break;
            }
        }
    }
}

function throwDice() {
    let drawFruit1 = getRandomInt(5)
    let drawFruit2 = getRandomInt(5)
    let drawFruit3 = getRandomInt(5)
    let drawFruit4 = getRandomInt(5)
    let drawFruit5 = getRandomInt(5)
    
    let respin1 = getRandomInt(5)
    let respin2 = getRandomInt(5)
    let respin3 = getRandomInt(5)
    let respin4 = getRandomInt(5)
    let respin5 = getRandomInt(5)

    if (reSpin){
       console.log("rollataan uudet")
       respinStatus.innerHTML = '';

       for (let key in lockedFruits) {
        if (lockedFruits.hasOwnProperty(key)) {
            let value = lockedFruits[key];
            if (value === false) {
                // Re-roll only if the fruit is unlocked (value is false)
                switch (key) {
                    case "Fruit1":
                        fruit1.src = `gamePics/${respin1}.png`;
                        console.log("REROLLED FRUIT1",respin1)
                        results[0] = respin1;
                        break;
                    case "Fruit2":
                        fruit2.src = `gamePics/${respin2}.png`;
                        console.log("REROLLED FRUIT2",respin2)
                        results[1] = respin2;
                        break;
                    case "Fruit3":
                        fruit3.src = `gamePics/${respin3}.png`;
                        console.log("REROLLED FRUIT3",respin3)
                        results[2] = respin3;
                        break;
                    case "Fruit4":
                        fruit4.src = `gamePics/${respin4}.png`;
                        console.log("REROLLED FRUIT4",respin4)
                        results[3] = respin4;
                        break;
                }
            }
        }
        
    }
        

        if (results[0] === results[1] && results[0] === results[2] && results[0] === results[3]){
            switch (results[0]){
                case 0: // APPLE
                    
                    defaultBal += winTable.apple
                    bal.innerHTML = defaultBal;
                    winAmount.innerHTML = "VOITIT: " + winTable.apple + "€";
                    kaching.play();
                    fruitLock1.enabled = false;
                    fruitLock2.enabled = false;
                    fruitLock3.enabled = false;
                    fruitLock4.enabled = false;
                    console.log("triggered apple")
                    respin = false;
                    results.length = 0;
                    return;
                case 1: // MELON
                    
                    defaultBal += winTable.melon
                    bal.innerHTML = defaultBal;
                    winAmount.innerHTML = "VOITIT: " + winTable.melon + "€";
                    kaching.play();
                    fruitLock1.enabled = false;
                    fruitLock2.enabled = false;
                    fruitLock3.enabled = false;
                    fruitLock4.enabled = false;
                    console.log("triggered melon")
                    respin = false;
                    results.length = 0;
                    return;
                case 2: // PEAR
                    
                    defaultBal += winTable.pear
                    bal.innerHTML = defaultBal;
                    winAmount.innerHTML = "VOITIT: " + winTable.pear + "€";
                    kaching.play();
                    fruitLock1.enabled = false;
                    fruitLock2.enabled = false;
                    fruitLock3.enabled = false;
                    fruitLock4.enabled = false;
                    console.log("triggered pear")
                    respin = false;
                    results.length = 0;
                    return;
                case 3: // CHERRY
                    
                    defaultBal += winTable.cherry
                    bal.innerHTML = defaultBal;
                    winAmount.innerHTML = "VOITIT: " + winTable.cherry + "€";
                    kaching.play();
                    fruitLock1.enabled = false;
                    fruitLock2.enabled = false;
                    fruitLock3.enabled = false;
                    fruitLock4.enabled = false;
                    console.log("triggered cherry")
                    respin = false;
                    results.length = 0;
                    return;
                case 4: // SEVEN
                    defaultBal += winTable.seven
                    bal.innerHTML = defaultBal;
                    winAmount.innerHTML = "VOITIT: " + winTable.seven + "€";
                    kaching.play();
                    fruitLock1.enabled = false;
                    fruitLock2.enabled = false;
                    fruitLock3.enabled = false;
                    fruitLock4.enabled = false;
                    console.log("triggered seven")
                    respin = false;
                    results.length = 0;
                    return;
                }
        }
        sevenCounter = 0;
        for (let i = 0; i < results.length; i++) {
            
            if (results[i] != 4){
                console.log("ei ollu 4 viel")
            }
            else {
                console.log(results[i]);
                sevenCounter += 1;
                console.log("triggered sevencounter")
                console.log("counted:",sevenCounter)
                if (sevenCounter === 3){
    
                    defaultBal += winTable.seven3
                    bal.innerHTML = defaultBal;
                    winAmount.innerHTML = "VOITIT: " + winTable.seven3 + "€";
                    console.log("triggered seven3")
                    
                    kaching.play();
                    sevenCounter = 0;
                }
            }

        }

        sevenCounter = 0;
        console.log("reseted sevencounter")
        fruitLock1.style.backgroundColor = "transparent";
        fruitLock2.style.backgroundColor = "transparent";
        fruitLock3.style.backgroundColor = "transparent";
        fruitLock4.style.backgroundColor = "transparent";
        
        fruitLock1.enabled = false;
        fruitLock2.enabled = false;
        fruitLock3.enabled = false;
        fruitLock4.enabled = false;
        
        reSpin = false;
        newRound = true;
        console.log("finished")
        sevenCounter = 0;
        console.log(results)
        results.length = 0;
        return
    }
    if (defaultBal < 1 || defaultBal < defaultBet) {
        alert("RAHAT LOPPU - kokeile pienemmällä panoksella?")
        return
    }
    lockedFruits.Fruit1 = false;
    lockedFruits.Fruit2 = false;
    lockedFruits.Fruit3 = false;
    lockedFruits.Fruit4 = false;
    lockedFruits.Fruit5 = false;
    
    defaultBal -= defaultBet;
    bal.innerHTML = defaultBal;
    fruitLock1.style.backgroundColor = "transparent";
    fruitLock2.style.backgroundColor = "transparent";
    fruitLock3.style.backgroundColor = "transparent";
    fruitLock4.style.backgroundColor = "transparent";
    
    winAmount.innerHTML = '';

    
    fruit1.src = `gamePics/${drawFruit1}.png`;
    fruit2.src = `gamePics/${drawFruit2}.png`;
    fruit3.src = `gamePics/${drawFruit3}.png`;
    fruit4.src = `gamePics/${drawFruit4}.png`;
    fruit5.src = `gamePics/${drawFruit5}.png`;
    console.log("first roll results: ",drawFruit1, drawFruit2, drawFruit3, drawFruit4);
    results.push(drawFruit1,drawFruit2,drawFruit3,drawFruit4)
    console.log("RESULTIT: " + results)
    console.log("sevencounter:", sevenCounter);
    for (let i = 0; i < results.length; i++) {
        if (results[i] === 4){
            sevenCounter += 1;
        }
        if (sevenCounter === 3){
            defaultBal += winTable.seven3
            bal.innerHTML = defaultBal;
            winAmount.innerHTML = "VOITIT: " + winTable.seven3 + "€";
            console.log("TRIGGEED SECOND SEVEN3")
            reSpin = false;
            fruitLock1.enabled = false;
            fruitLock2.enabled = false;
            fruitLock3.enabled = false;
            fruitLock4.enabled = false;
            kaching.play();
            sevenCounter = 0;
            results.length = 0;
            return
        }
    }
    if (drawFruit1 === drawFruit2 && drawFruit1 === drawFruit3 && drawFruit1 === drawFruit4) {
        reSpin = false;
        switch (drawFruit1) {
            case 0: // APPLE
                
                defaultBal += winTable.apple
                bal.innerHTML = defaultBal;
                winAmount.innerHTML = "VOITIT: " + winTable.apple + "€";
                kaching.play();
                fruitLock1.enabled = false;
                fruitLock2.enabled = false;
                fruitLock3.enabled = false;
                fruitLock4.enabled = false;
                results.length = 0;
                console.log("reseted array")
                return;
            case 1: // MELON
                
                defaultBal += winTable.melon
                bal.innerHTML = defaultBal;
                winAmount.innerHTML = "VOITIT: " + winTable.melon + "€";
                kaching.play();
                fruitLock1.enabled = false;
                fruitLock2.enabled = false;
                fruitLock3.enabled = false;
                fruitLock4.enabled = false;
                results.length = 0;
                console.log("reseted array")
                return;
            case 2: // PEAR
                
                defaultBal += winTable.pear
                bal.innerHTML = defaultBal;
                winAmount.innerHTML = "VOITIT: " + winTable.pear + "€";
                kaching.play();
                fruitLock1.enabled = false;
                fruitLock2.enabled = false;
                fruitLock3.enabled = false;
                fruitLock4.enabled = false;
                results.length = 0;
                console.log("reseted array")
                return;
            case 3: // CHERRY
                
                defaultBal += winTable.cherry
                bal.innerHTML = defaultBal;
                winAmount.innerHTML = "VOITIT: " + winTable.cherry + "€";
                kaching.play();
                fruitLock1.enabled = false;
                fruitLock2.enabled = false;
                fruitLock3.enabled = false;
                fruitLock4.enabled = false;
                results.length = 0;
                console.log("reseted array")
                return;
            case 4: // SEVEN
                defaultBal += winTable.seven
                bal.innerHTML = defaultBal;
                winAmount.innerHTML = "VOITIT: " + winTable.seven + "€";
                kaching.play();
                fruitLock1.enabled = false;
                fruitLock2.enabled = false;
                fruitLock3.enabled = false;
                fruitLock4.enabled = false;
                results.length = 0;
                console.log("reseted array")
                return;
        }
        
    }
    
    console.log("called respin")
    reSpin = true;
    fruitLock1.enabled = true;
    fruitLock2.enabled = true;
    fruitLock3.enabled = true;
    fruitLock4.enabled = true;
    respinStatus.innerHTML = 'Uudelleen pyöräytys! Lukitse haluamasi rullat.';


}

let lockedFruits = {
    Fruit1: false,
    Fruit2: false,
    Fruit3: false,
    Fruit4: false,
    Fruit5: false
};

const winTable = {
    get apple(){
        return defaultBet * 6; // 6x
    },
    get melon(){
        return defaultBet * 5; // 5x
    },
    get pear(){
        return defaultBet * 4; // 4x
    },
    get cherry(){
        return defaultBet * 3; // 3x
    },
    get seven(){
        return defaultBet * 10; // 10x
    },
    get seven3(){
        return defaultBet * 5; // 5x
    }
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
