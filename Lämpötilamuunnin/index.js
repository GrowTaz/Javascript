let isChecked = false; 
document.getElementById("submit").onclick = function () {
    let selection = document.getElementById("selected").value;
    let temp = document.getElementById("lämpö").value
    let isNumber = checkNullValues(Number(document.getElementById("lämpö").value));
    

    if (selection == "1" && isNumber) { 
        let fahrenheitTemp = toFahrenheit(temp);
        let tempFinalFahrenheit = doButtonDecimalCalc(Number(fahrenheitTemp));
        
        if (isChecked){
            document.getElementById("label").innerHTML = tempFinalFahrenheit + " °F";
        }
        else {
            alert("Please select a decimal");
        }
         
    }
    else if (selection == "2" && isNumber) {
        let celsiusTemp = toCelcius(temp);
        tempFinalCelsius = doButtonDecimalCalc(celsiusTemp);
        if (isChecked && tempFinalCelsius > -273.15) {
            document.getElementById("label").innerHTML = tempFinalCelsius + " °C";
        }
        else if (tempFinalCelsius <= -273.15){
            alert("Lämpötila on pienempi kuin absoluuttinen nollapiste!")
        }
        else {
            alert("Valtise desimaali");
        }
        
       
    }
    else{
        console.log("nothing selected")
        alert("Valitse oikea lämpötila")
    }
    
    
}



function doButtonDecimalCalc(tempValue) {
    let checkButtonValue = selectedRadioButton();


    if (checkButtonValue == "1") {
        tempValue = tempValue.toFixed(1);
        return tempValue
    }
    if (checkButtonValue == "2") {
        tempValue = tempValue.toFixed(2);
        return tempValue
    }
    if (checkButtonValue == "3") {
        tempValue = tempValue.toFixed(3);
        return tempValue
    }
}


function selectedRadioButton() {
    let buttonValue;

    if (document.getElementById("1dc").checked) {
        buttonValue = "1";
        isChecked = true;
        return buttonValue;
    }

    if (document.getElementById("2dc").checked) {
        buttonValue = "2";
        isChecked = true;
        return buttonValue;
    }

    if (document.getElementById("3dc").checked) {
        buttonValue = "3";
        isChecked = true;
        return buttonValue;
    }
    
}

function checkNullValues(value) {
    
    if (value != Number(value)) {
        return false
    }
    return true
}

function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
    
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}