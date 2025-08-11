/**
 * Listar elementos com for. Crie um array com nome de 5 cidades e use um loop 
 * for normal para imprimir cada cidade no console e sua posição no array.
 */
const cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];
for (let i = 0; i < cidades.length; i++) {
    console.log(`Cidade: ${cidades[i]}, Posição: ${i}`);
}

/**
 2. SOMAR NÚMEROS COM FOR

DADO UM ARRAY DE NÚMEROS INTEIROS, USE UM LOOP FOR PARA CALCULAR A SOMA TOTAL DOS ELEMENTOS.
 */
const numeros = [10, 20, 30, 40, 50];
let soma = 0;   
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}   
/*
IMPRIMIR VALORES COM FOR...OF
CRIE UM ARRAY COM NOMES DE FRUTAS. USE FOR...OF PARA IMPRIMIR CADA FRUTA EM LETRAS MAIÚSCULAS.
CONST FRUTAS = ["MAÇÃ", "BANANA", "LARANJA"]; // SAÍDA ESPERADA: // MAÇÃ // BANANA // LARANJA
*/
const frutas = ["maçã", "banana", "laranja"];
for (const fruta of frutas) {
    console.log(fruta.toUpperCase());
}   
/**4. MULTIPLICAR ELEMENTOS COM FOREACH
DADO UM ARRAY DE PREÇOS, USE FOREACH PARA IMPRIMIR O VALOR DE CADA ITEM COM 10% DE DESCONTO.
CONST PRECOS = [100, 250, 80]; // SAÍDA ESPERADA: // 90 // 225 // 72
*/
const precos = [100, 250, 80];
precos.forEach(preco => {
    const desconto = preco * 0.9;
    console.log(desconto);
});

/**TRANSFORMAR COM MAP
CRIE UM ARRAY COM IDADES. USE MAP PARA GERAR UM NOVO ARRAY COM AS IDADES EM MESES (IDADE × 12).
*/
const idades = [18, 25, 30];
const idadesEmMeses = idades.map(idade => idade * 12);
console.log(idadesEmMeses);
/**
 *FILTRAR COM FILTER
DADO UM ARRAY DE TEMPERATURAS, USE FILTER PARA RETORNAR APENAS AS TEMPERATURAS ACIMA DE 30 GRAUS
 */
const temperaturas = [25, 32, 28, 35, 30, 40];
const altasTemperaturas = temperaturas.filter(temperatura => temperatura > 30);
console.log(altasTemperaturas);
/**
CONTAR ELEMENTOS COM reduce
DADO UM ARRAY COM LETRAS REPETIDAS, USE PARA CONTAR QUANTAS VEZES CADA LETRA APARECE.
*/

const letras = ['a', 'b', 'a', 'c', 'b', 'd', 'a'];
const contagemLetras = letras.reduce((acc, letra) => {
    acc[letra] = (acc[letra] || 0) + 1; // Incrementa a contagem da letra
    return acc;
}, {});
console.log(contagemLetras);

// let map = new Map();
// for (const letra of letras) {
//     if (map.has(letra)) {
//         map.set(letra, map.get(letra) + 1); //key,value
//     } else {
//         map.set(letra, 1);
//     }
// }   
// console.log(map);
/**faça o mesmo usando reduce */

/**
CALCULAR MÉDIA COM REDUCE
CRIE UM ARRAY COM NOTAS DE ALUNOS. USE REDUCE PARA CALCULAR A MÉDIA DAS NOTAS.
CONST NOTAS = [8, 7.5, 9, 6];
 */
const notas = [8, 7.5, 9, 6];
const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
console.log(`Média das notas: ${media}`);

/*FILTRAR E TRANSFORMAR COM FILTER + MAP
DADO UM ARRAY DE NÚMEROS, FILTRE OS PARES E DEPOIS MULTIPLIQUE CADA UM POR 2
*/
const numerosArray = [1, 2, 3, 4, 5, 6];
const numerosParesMultiplicadospor2 = numerosArray.filter(numero => numero % 2 === 0) //filtrando pares
    .map(numero => numero * 2);
console.log(numerosParesMultiplicadospor2);

/**
 * crar frases com map:
 * crie um array com nomes  e use map para gerar frases de apresentação.
 * Exemplo: "Meu nome é Carlos"
 */
const nomes = ['Carlos', 'Ana', 'João'];
const frasesApresentacao = nomes.map(nome => `Meu nome é ${nome}`);
console.log(frasesApresentacao);