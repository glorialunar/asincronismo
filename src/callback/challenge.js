//Primero instalamos la dependencia con ayuda de la terminal usando "npm install xmlhttprequest --save"
//Luego instanciamos este elemento en este proyecto para poder hacer peticiones a algun servidor de la nube
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Almacenamos en una variable a la direccion de la API
let api = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    //Generando la referencia al objeto que necesito
    let xhttp = new XMLHttpRequest();
    
    //Hacemos un llamado (.open) a nuestra referencia xhttp. 3 parámetros: la peticion que queremos hacer, la url desde la cual queremos la data, que se maneje de forma asincrona (true. Por defecto es true);
    xhttp.open('GET', url_api, true);
    
    //Escuchar lo que va a hacer esa conexión. Si el cambio sucede entonces hacemos las siguientes validaciones:
    xhttp.onreadystatechange = function (event) {
        
        //El estado en el que se encuentra, es decir, si la conexión se completó y hemos recibido unos valores (4)
        if (xhttp.readyState === 4) {
            
            //El estatus en el que se encuentra, porque si bien sabemos que se ha completado la peticion, no sabemos si esta es correcta, es decir, que la situacion ha sido completada correctamente (200)
            if(xhttp.status === 200){
                
                //Normalmente callback utiliza un estandar dentro de node donde el primer valor es el error, y el segundo es la información que se desencadena. 
                //Como este resultado es un JSON, hay que parsearlo porque lo que se recibe es una respuesta en texto
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error ('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    //Enviando la solicitud
    xhttp.send();
};

//Aca ya comenzamos a resolver el problema, el cual consiste en:
//1) Hacer una peticion a nuestra API y obtener cuantos elementos contiene de personajes.
//2) Acceder al primer personaje
//3) Obtener la ubicación en la que se encuentra para saber la dimensión donde se encuentra.

//Primero buscamos la lista de personajes usando la función fetchData
fetchData(api, function(error1, data1){
    //Si hay un error, lo mostramos y cerramos el proceso con un return.
    if(error1){
        return console.log(error1);
    } else {
        //Si no hay error, continuamos buscando en la API, el id del personaje en la ubicación cero (0)
        fetchData(api + data1.results[0].id, function(error2, data2){
             //Si hay un error, lo mostramos y cerramos el proceso con un return.
            if(error2){
                return console.log((error2));
            } else {
                //Si no hay error, entonces buscamos la url que contiene su dimensión
                fetchData(data2.origin.url, function(error3, data3){
                    //Si hay un error, lo mostramos y cerramos el proceso con un return.
                    if(error3){
                        return console.log(error3)
                    }
                    console.log(data1.info.count);
                    console.log(data2.name);
                    console.log(data3.dimension);
                })
            }
        })
    }
})
