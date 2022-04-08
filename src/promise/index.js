//Entendiendo promesas
const somethingWillHappen = () => {
    return new Promise ((resolve,reject) => {
        if(true){
            resolve("Yasss, funciona!!")
        } else{
            reject("Ups, esto no está funcionando :(")
        }
    })
}
//De esta manera ejecutamos una promesa:
somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));


const somethingWillHappen2 = () => {
    return new Promise ((resolve,reject) => {
        if(true){
            setTimeout(() =>{
                resolve('Este también funca <3')
            }, 2000)
        } else {
            const error = new Error('Upsi :(')
            reject(error)
        }
    })
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.log(error))

//Para ejecutar mas de una promesa, se usa .all, y las respuestas se almacenarán y mostrarán en un array.
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('Array of results', response))
    .catch(err => console.log(err))