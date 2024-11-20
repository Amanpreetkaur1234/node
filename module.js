let http = require('http');
let sum = require('./operations/add');
let date = require('./operations/date');
let divide = require('./operations/divide');
let power = require('./operations/exponent');
let factorial = require('./operations/factorial');
let modulus = require('./operations/modulus');
let product = require('./operations/multiply');
let sqroot = require('./operations/squareroot') 
let subtract = require('./operations/subtract');

http.createServer(function(req,res){

    res.writeHead(200,{ 'Content-Type':'text/html' });
    res.write("<h1>sum = " +sum.add(7,4));
    res.write("<h1>Current Date = " + date.currdate());
    res.write("<h1>Divide = " +divide.divide(10,2));
    res.write("<h1> Exponent = "+power.exponent(2,5));
    res.write("<h1>Factorial = "+factorial.factorial(5));
    res.write("<h1>Modulus = "+modulus.modulus(15,4));
    res.write("<h1>Multiply = "+product.multiply(4,5));
    res.write("<h1>Squareroot = "+sqroot.squareroot(25));
    res.write("<h1>Subtract = "+subtract.subtract(10,5));
    res.write("<br><p>Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine");     
    res.end();
}).listen(1222);

console.log("hello")