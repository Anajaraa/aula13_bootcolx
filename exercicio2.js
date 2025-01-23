// 1. Escreva uma função que receba uma string e retorne o número de caracteres contidos nela.
// let txt = "Anajara";
// console.log(txt, "=", txt.length);

function caracter(txt) {
    return txt.length; 
}

let txt = "Anajara";
console.log(txt + " = " + caracter(txt));


// 2. Escreva uma função que receba uma string e retorne a mesma string em letras maiúsculas.

function conv(nome) {
    return nome.toUpperCase(); 
}

console.log(conv("Anajara")); 

// 3. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function convs(palavra) {
    return palavra.toLowerCase(); 
}

console.log(convs("Anajara")); 

// 4. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.

function iguais(words1, words2){
    if (words1 === words2){
        return ("Yes")
    }else{
    return ("No");
}
}
console.log(iguais('Anajara', 'Aninha'));
console.log(iguais('Anajara', 'Anajara'));

// 5. Escreva uma função que receba uma string e um número e retorne os primeiros caracteres da string de acordo com o número informado.

function fCaracter(texto, numero) {
    if (numero > texto.length) {
        return "o número informado é maior que a palavra.";
    }
    return texto.substring(0, numero); 
}

console.log(fCaracter("Anajara", 4));  
console.log(fCaracter("Anajara", 10)); 


// 6. Escreva uma função que recebe uma frase e uma palavra. Retorne a frase com as ocorrências da palavra censuradas/trocadas por ****.

function censurar(frase, palavra) {
    let i = frase.indexOf(palavra); 
    while (i !== -1) { 
        frase = frase.slice(0, i) + '****' + frase.slice(i + palavra.length);
        i = frase.indexOf(palavra, i + 4); 
    }
    return frase;
}

console.log(censurar("Esse codigo é muito lindo", "codigo")); 


// 7. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.
function contador(palavras, caractere) {
    let contador = 0; 
    for (let i = 0; i < palavras.length; i++) { 
        if (palavras[i] === caractere) {
            contador++;
        }
    }
    return contador; 
}

console.log(contador("Anajara", "a")); 
console.log(contador("Anajara", "A"));

// 8. Escreva uma função que receba um número e retorne seu dobro. Utilize arrow function.
const double = (numero) => numero * 2;
console.log(double(4));

// 9. Escreva uma função que receba um número e retorne seu quadrado. Utilize arrow function.

const quad = (numero) => numero * numero;

console.log(quad(4));