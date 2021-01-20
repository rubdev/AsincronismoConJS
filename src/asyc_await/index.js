// Trabajando con async - await
const hacerAlgoPromesa = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {console.log('Haciendo asincronia');}, 2000)
            : reject(new Error('Error'));
    });
}

// Esta es una función asincrona
const hacerAlgoAsincrono = async () => {
    // await hará que espere a terminar la promesa, tanto si se ejecuta bien como si no
    try {
        const algo = await hacerAlgoPromesa();
    } catch(err) {
        console.error(err);
    }
    
    console.log(algo);
}
// si ejecutamos lo siguiente vemos como realiza la promesa asincrona
console.log('Antes...');
hacerAlgoPromesa();
console.log('Después...');