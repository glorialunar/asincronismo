// Entendiendo callbacks
function sum (num1, num2) {
    return num1 + num2;
}

function calc (num1, num2, callback) {
    return callback (num1, num2);
}

console.log(calc(5,550,sum));

// Entendiendo setTimeout
function date() {
    console.log("Primer console.log", new Date);
    setTimeout(function (){
        console.log("Segundo console.log", new Date);
    }, 3000)
    console.log("Tercer console.log", new Date);
}

date();

// Usando setTimeout con callback
function date1(callback) {
    console.log("Primer console.log (2do ejemplo)", new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate (dateNow) {
    console.log("Segundo console.log (2do ejemplo)", dateNow);
}

date1(printDate);

