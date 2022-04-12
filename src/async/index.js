//Aqui obtenemos la promesa de que algo va a suceder
const doSomething = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something'), 3000)
            : reject (new Error('Test error'))  
    })
};

//Hacemos uso de una función asíncrona para ejecutar la función cuando ese "algo" suceda.
const doSomethingAsync = async () => {
    const something = await doSomething()
    console.log(something);
}

// console.log('Before');
// doSomethingAsync();
// console.log('After');


//Esta sería una mejor opción para ejecutar la promesa, capturando errores.
const anotherFuncion = async () => {
    try{
        const something = await doSomething();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFuncion();
console.log('After');