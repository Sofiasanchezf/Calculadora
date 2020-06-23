let operando1 = 0;
let operando2 = 0;
let operacion = '';
let historico = [];
let flag = 1;
let flagPunto = 1;
let flagReset = 1;
let total = document.getElementById("resultado");



function restaurarVal(){
    operando1 = 0;
    operando2 = 0;
    operacion = '';
    flag = 1;
    flagPunto = 1;
}

function reset() {
    total.innerHTML = ""
    restaurarVal();
}


function numero(num) {
    if (flagReset === 0) {
        total.innerHTML = ""
        flagReset= 1;
    }
    
    total.innerHTML = total.innerHTML + num;
}


function punto() {
    
    // Controlamos que no se introduzca mas de un punto y que no se ponga un punto sin numero delante
    if (flagPunto === 1 && total.innerHTML.length !== 0) {
        total.innerHTML = total.innerHTML + '.';
        flagPunto = 0;
    }
  
}


function mas() {
    // Control para que solo se introduzca una operacion
    if(flag === 1 ) {

        // Control para que solo se introduzca una operacion
        operando1 = total.innerHTML;
        if (operando1.length === 0) {
            return;
        }
        
        operacion = '+';
        total.innerHTML = total.innerHTML + operacion;
        flag = 0;
        
    }
}

function menos() {
    // Control para que solo se introduzca una operacion
    if (flag === 1){
        operando1 = total.innerHTML;
        if (operando1.length === 0) {
            return;
        }

        operacion = '-'
        total.innerHTML = total.innerHTML + operacion;
        flag = 0;
    }
}


function por(){
    // Control para que solo se introduzca una operacion
    if (operacion ===''){
        operando1 = total.innerHTML;
        if (operando1.length  === 0) {
            return;
        }

        operacion = '*'
        total.innerHTML = total.innerHTML + operacion;
        flag = 0;
    }
}

function division(){
    // Control para que solo se introduzca una operacion
    if (operacion ===''){
        operando1 = total.innerHTML;
        if (operando1.length  === 0) {
            return;
        }

        operacion = '/'
        total.innerHTML = total.innerHTML + operacion;
        flag = 0;
    }
}


function igual() {

    let resultado = 0;
    operando1 = parseFloat(operando1);

    operando2 = parseFloat(total.innerHTML.split(operacion)[1]);
    
    if (operacion === '+') {
        resultado = operando1 + operando2;
        total.innerHTML = resultado;
    }

    else if (operacion === '-') {
        resultado = operando1 - operando2;
        total.innerHTML = resultado;
    }
    
    else if (operacion === '*') {
        resultado = (operando1) * (operando2);
        total.innerHTML = resultado
    }

    else if (operacion === '/') {
        resultado = (operando1) / (operando2);
        total.innerHTML = resultado;
    }

    else {
        alert("Introduce una operación");
        return;
    }

    insertarHistorial(resultado);
    restaurarVal();
    flagReset = 0;
}

function insertarHistorial(resultado){
    let his = document.getElementById("operaciones");
    var newP = document.createElement("p");
    newP.innerHTML = ''+operando1+' '+operacion+' '+operando2+' = '+resultado;
    his.appendChild(newP);
}


function limpiarHistorial() {
    let historico = []
    let obj = document.getElementById("operaciones");
    obj.innerHTML = ""
}