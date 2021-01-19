// Construcción de la promesa
const algoVaAPasar = () => {
    return new Promise((resolve, reject) => {
        // cambiando el true-false irá por un camino u otro
        if(true) {
            resolve('Se realizó la promesa');
        } else {
            reject('Error al realizar la promesa');
        }
    });
}

// Ejecución de la promesa
// Si se cumple ejecutará el then
// si no tirará el error por el catch
algoVaAPasar()
    .then(res => console.log(res))
    .catch(err => console.log(err));