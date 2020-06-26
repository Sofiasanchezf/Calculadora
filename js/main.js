
/**
 * Declaracion de variables
 */
let operando1 = 0;
let operando2 = 0;
let operacion = '';
let historico = [];
let flag = 1; //Flag para controlar que no puedas poner mas de un signo seguido
let flagPunto = 1; //Flag para poner solo un punto
let flagReset = 1;
let total = document.getElementById("resultado");


/**
 * Restaura todas las variables con los valores por defecto.
 */
function restaurarVal() {
    operando1 = 0;
    operando2 = 0;
    operacion = '';
    flag = 1;
    flagPunto = 1;
}

/**
 * Funcion reset para la tecla "C" de la calculadora
 */
function reset() {
    total.innerHTML = ""
    restaurarVal();
}

/**
 * Funcion que nos permite mostrar por pantalla el numero en el que pulsamos
 */
function numero(num) {

    // Control para quitar el resultado anterior y poner el nuevo numero de una operacion
    if (flagReset === 0) {
        total.innerHTML = ""
        flagReset = 1;
    }

    total.innerHTML = total.innerHTML + num;
}

/**
 * Funcion que nos permite añadir un punto al numero de la pantalla
 */
function punto() {

    // Controlamos que no se introduzca mas de un punto y que no se ponga un punto sin numero delante
    if (flagPunto === 1 && total.innerHTML.length !== 0) {
        total.innerHTML = total.innerHTML + '.';
        flagPunto = 0;
    }

}

/**
 * Funcion que nos captura el primer operando de la operacion, establece que la operacion a realizar es la sumay la muestra por pantalla.
 */
function mas() {
    // Control para que solo se introduzca una operacion
    if (flag === 1) {

        // Control para que solo se introduzca una operacion
        operando1 = total.innerHTML;
        if (operando1.length === 0) {
            return;
        }

        operacion = '+';
        total.innerHTML = total.innerHTML + operacion;
        flag = 0;
        flagPunto = 1;
    }
}

/**
 * Funcion que nos captura el primer operando de la operacion, establece que la operacion a realizar es la resta y la muestra por pantalla.
 */
function menos() {
    // Control para que solo se introduzca una operacion
    if (flag === 1) {
        operando1 = total.innerHTML;
        if (operando1.length === 0) {
            return;
        }

        operacion = '-'
        total.innerHTML = total.innerHTML + operacion;
        flag = 0;
        flagPunto = 1;
    }
}


/**
 * Funcion que nos captura el primer operando de la operacion, establece que la operacion a realizar es la multiplicacion y la muestra por pantalla.
 */
function por() {
    // Control para que solo se introduzca una operacion
    if (operacion === '') {
        operando1 = total.innerHTML;
        if (operando1.length === 0) {
            return;
        }

        operacion = '*'
        total.innerHTML = total.innerHTML + operacion;
        flag = 0;
        flagPunto = 1;
    }
}

/**
 * Funcion que nos captura el primer operando de la operacion, establece que la operacion a realizar es la division y la muestra por pantalla.
 */
function division() {
    // Control para que solo se introduzca una operacion
    if (operacion === '') {
        operando1 = total.innerHTML;
        if (operando1.length === 0) {
            return;
        }

        operacion = '/'
        total.innerHTML = total.innerHTML + operacion;
        flag = 0;
        flagPunto = 1;
    }
}

/**
 * Funcion que calcula el resultado total de la operacion.
 *  Capturamos los operandos, realizando un casting a Float, y realizamos la operacion guardada anteriormente.
 */
function igual() {

    let resultado = 0;
    operando1 = parseFloat(operando1);

    operando2 = parseFloat(total.innerHTML.split(operacion)[1]);

    //Controlamos que sea una opreacion valida y que se ha introducido un segundo operando
    if (isNaN(operando2)) {
        alert("Introduce una operación válida");
        return;
    }

    if (operacion === '+') {
        resultado = operando1 + operando2;
        total.innerHTML = resultado;
    }

    else if (operacion === '-') {
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
        alert("Introduce una operación válida");
        return;
    }

    insertarHistorial(resultado);
    restaurarVal();

    // Bajamos la bandera para indicar que podemos borrar el resultado e introducir un nuevo numero
    flagReset = 0; 
}


/**
 * Funcion que nos permite añadir la operacion realizada en el historial de operaciones.
 *  Creamos un nuevo elemento y se lo añadimos al padre.
 */
function insertarHistorial(resultado) {
    let his = document.getElementById("operaciones");
    var newP = document.createElement("p");
    newP.innerHTML = '' + operando1 + ' ' + operacion + ' ' + operando2 + ' = ' + resultado;
    his.appendChild(newP);
}

/**
 * Funcion que nos permite limpiar el historial y borrar las operaciones realizadas previamente.
 */
function limpiarHistorial() {
    let historico = []
    let obj = document.getElementById("operaciones");
    obj.innerHTML = ""
}