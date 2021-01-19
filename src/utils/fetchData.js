let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) =>  {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        // Petición GET, url de donde cogerá datos y true para que use asincronismo
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            // validar estado en el que se encuntra la llamada, si es satisfactorio lo mandaremos
            // el 4 indica que está cargado ok
            if (xhttp.readyState === 4) {
                // ejecutamos una llamada si el estado http es correcto
                (xhttp.status === 200) 
                    ? resolve(JSON.parse(xhttp.responseText)) 
                    : reject(new Error('Error ', url_api));
            }
        })
        return xhttp.send();
    });
    
}

module.exports = fetchData;