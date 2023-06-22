//Conversion Celcius To Farenheit
function tempConvert() {

    var celcius = document.getElementById("celcius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;

    if (celcius != '') {
        fahrenheit = (parseFloat(celcius) * 1.8) + 32;
    } else {
        celcius = (parseFloat(fahrenheit) - 32) / 1.8; 
    }
    
    document.getElementById('celcius').value = parseFloat(celcius).toFixed(1);
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    
//Cara Kalkulasi
    var input = (celcius);
    document.getElementById("input").innerHTML = input; 

    var hasil = ((celcius) * 1.8) + 32;
    document.getElementById("hasil").innerHTML = hasil;
}

//Reset
function clearForm() {
    document.getElementById("celcius").value = '';
    document.getElementById("fahrenheit").value = '';
    document.getElementById("input").innerHTML = '';
    document.getElementById("hasil").innerHTML = '';
    
}
