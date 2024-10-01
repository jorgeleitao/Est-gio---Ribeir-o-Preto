function countA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return `A letra 'A' aparece ${count} vezes.`;
}

const texto = "Estabilidade não existe"; 
console.log(countA(texto));

