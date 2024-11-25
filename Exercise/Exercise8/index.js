const display = document.getElementById('display-field');


function appendDisplay(key){
    if (display.value == "Error Loy!" || display.value == "Infinity"){
        display.value = "";
    }
    display.value += key;
}

function displayResult(){
    try {
        display.value = eval( display.value);
    }
    catch(error){
        display.value = "Error Loy!";
    }
}

function deleteKey() {
    if (!(/^\d+$/.test(display.value))){
        display.value = "";
        return;
    }
    keys = display.value;
    display.value = "";
    for (i=0; i<keys.length-1; i++){
        display.value += keys[i];
    }
}

function clearDisplay(){
    display.value = "";
}