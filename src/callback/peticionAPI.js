// Haremos un callback para llamar a una api externa 
// instalar previamente -> npm install xmlhttprequest --save
// no utilizamos fetch que es mas novedoso porque utiliza promesas que se verá posteriormente

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    // Petición GET, url de donde cogerá datos y true para que use asincronismo
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        // validar estado en el que se encuntra la llamada, si es satisfactorio lo mandaremos
        // el 4 indica que está cargado ok
        if (xhttp.readyState === 4) {
            // ejecutamos una llamada si el estado http es correcto
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error '+ url_api);
                return callback(error, null);
            }
        }
    }
    return xhttp.send();
}

// Hacemos la petición
// primero buscamos la lista de personajes
fetchData(API, (error1, data1) => {
    // si error, matamos retornando un error
    if(error1) return console.error(error1);
    // luego buscamos en la api el id de Rick
    fetchData(API + data1.results[0].id, (error2, data2) => {
      // si error, matamos retornando un error
      if(error2) return console.error(error2);
      // por ultimo la consulta a la api que contiene su dimension
      fetchData(data2.origin.url, (error3, data3) => {
        // si error, matamos retornando un error
        if(error3) return console.error(error3);
        
        // mostramos los resultados :) 
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
        
        // rutas de las peticiones en orden
        console.log(API);
        console.log(API + data1.results[0].id); 
        console.log(data2.origin.url); 
      
      });
    });
  });