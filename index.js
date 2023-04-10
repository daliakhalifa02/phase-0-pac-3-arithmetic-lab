function increment(n){
    return n+=1;
}

function decrement(n){
    return n-=1;
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function makeInt(string){
    return parseInt(string,10);
}

function preserveDecimal(string){
    return parseFloat(string)
}

console.log(preserveDecimal("25.5564499"))