function isFibonacci(num) {
    let a = 0, b = 1, temp = 0;

    console.log(`Sequência de Fibonacci gerada até ${num}:`);
    console.log(a); 
    console.log(b); 

    while (b < num) {
        temp = a;
        a = b;
        b = temp + b;
        console.log(b); 
    }

    return b === num || num === 0
        ? `${num} pertence à sequência de Fibonacci`
        : `${num} não pertence à sequência de Fibonacci`;
}

const numero = 21;  
console.log(isFibonacci(numero));
