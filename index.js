
let lenghtEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let numberInp = document.getElementById("inputNumber")
let buttonEl = document.getElementById("button")

numberInp.value = 0
// label de lenght 

lenghtEl.textContent = numberInp.value +  " meters = "  +  
calculeFeet(numberInp.value).toFixed(3) + " feet" + " | " + numberInp.value + " feet" + " = " + calculeMeters(numberInp.value).toFixed(3) + " meters"

//label de volumen

volumeEl.textContent = numberInp.value +  " liters = "  +  
calculeGallons(numberInp.value).toFixed(3) + " gallons" + " | " + numberInp.value + " gallons" + " = " + calculeLiters(numberInp.value).toFixed(3) + " liters"

//label de mass

massEl.textContent = numberInp.value +  " kilos = "  +  
calculeKilos(numberInp.value).toFixed(3) + " pounds" + " | " + numberInp.value + " pounds" + " = " + calculePounds(numberInp.value).toFixed(3) + " kilos"


function btn(){


// label de lenght 

lenghtEl.textContent = numberInp.value +  " meters = "  +  
calculeFeet(numberInp.value).toFixed(3) + " feet" + " | " + numberInp.value + " feet" + " = " + calculeMeters(numberInp.value).toFixed(3) + " meters"

//label de volumen

volumeEl.textContent = numberInp.value +  " liters = "  +  
calculeGallons(numberInp.value).toFixed(3) + " gallons" + " | " + numberInp.value + " gallons" + " = " + calculeLiters(numberInp.value).toFixed(3) + " liters"

//label de mass

massEl.textContent = numberInp.value +  " kilos = "  +  
calculeKilos(numberInp.value).toFixed(3) + " pounds" + " | " + numberInp.value + " pounds" + " = " + calculePounds(numberInp.value).toFixed(3) + " kilos"
}

function calculeFeet (numberInp){
    return numberInp*3.28084;
}
function calculeMeters (numberInp){
    return numberInp/3.28084;
}



function calculeGallons (numberInp){
    return numberInp*0.264172;
}
function calculeLiters (numberInp){
    return numberInp/0.264172;
}



function calculeKilos (numberInp){
    return numberInp*2.20462;
}
function calculePounds (numberInp){
    return numberInp/2.20462;
}




