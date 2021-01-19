
function suma(n1,n2) {
    return n1 + n2;
}
// ejemplo de callback
// función que recibe como argumento la creada previamente
function calcular(n1, n2, callback) {
    return callback(n1, n2);
}

console.log(calcular(2,5,suma));

// Modificamos el package.json para ejecutar el script 
// se puede ejecutar con npm run callback 

// Otro ejemplo
function fecha(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000);
}

function imprimirFecha(fechaActual) {
    console.log(fechaActual);
}

fecha(imprimirFecha)