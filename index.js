
let lenghtEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let numberInp = document.getElementById("inputNumber")
let buttonEl = document.getElementById("button--el")

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
//console.log(numberInp.value)

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

/*
<!--0 meters = 0.000 feet | 0 feet = 0.000 meters-->
calculo metro - pies
1metro____3.28084pies

20metros___ x pies

20 * 3.28084 
*/

/*
calculo pies - metro
1metro____3.28084pies

xmetros___ 20 pies

20 / 3.28084 
*/

function calculeFeet (numberInp){
    return numberInp*3.28084;
}
function calculeMeters (numberInp){
    return numberInp/3.28084;
}

/*
0 liters = 0.000 gallons | 0 gallons = 0.000 liters

1litro____0.264172galones

20litros___ x galones


20 * 0.264172
 
*/

/*
calculo gallons - litters
1litro____0.264172galones

xlitros___ 20 galones

20 / 0.264172
*/


function calculeGallons (numberInp){
    return numberInp*0.264172;
}
function calculeLiters (numberInp){
    return numberInp/0.264172;
}


/*
0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos


1 kilo____2.20462 libras
20 kilos___ x libras


20 * 2.20462
 
*/

/*

1 kilo____2.20462 libras
x kilos___ 20 libras

20 / 2.20462
*/


function calculeKilos (numberInp){
    return numberInp*2.20462;
}
function calculePounds (numberInp){
    return numberInp/2.20462;
}




