/**
 * 1- Uma variável numeroDia guarda um número de 1 a 7 digitado pelo usuário.
Crie uma estrutura if/else que exiba o nome do dia da semana
correspondente (1 para "Domingo", 7 para "Sábado"). Se o número não estiver nesse
intervalo, exiba "Número inválido".
*/
let numeroDia = parseInt(prompt("Digite um número de 1 a 7:"));

if (numeroDia == 1) { 
    alert("Domingo");
} else if (numeroDia == 2) {
    alert("Segunda-feira");
} else if (numeroDia == 3) {
    alert("Terça-feira");
} else if (numeroDia == 4) {
    alert("Quarta-feira");
} else if (numeroDia == 5) {
    alert("Quinta-feira");
} else if (numeroDia == 6) {
    alert("Sexta-feira");   
} else if (numeroDia == 7) {
    alert("Sábado");
} else {
    alert("Número inválido");
}

/*
2- Duas variáveis, usuário e senha, guardam as informações de login. Verifique se o usuário é "admin"
E a senha é "1234". Se as duas condições forem verdadeiras, exiba "Acesso concedido!". Caso contrário,
exiba "Acesso negado!".
*/

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");
if (usuario === "admin" && senha === "1234") {
    alert("Acesso concedido!");
} else {
    alert("Acesso negado!");
}

/**
3- Uma pessoa quer comprar um produto. Crie uma condição que verifica se a pessoa é membroVip OU
se o valorDaCompra é maior que R$1000. Se uma dessas condições for verdadeira, exiba "Compra com desconto!".
Senão, exiba "Compra com preço normal.".
*/

let membroVip = confirm("Você é membro VIP? (OK para sim, Cancelar para não)");
let valorDaCompra = parseFloat(prompt("Digite o valor da compra:"));
if (membroVip || valorDaCompra > 1000) {
    alert("Compra com desconto!");
} else {
    alert("Compra com preço normal.");
}

/*
4- Use um laço for para exibir os números de 1 a 10 no console.
*/
console.log("Números de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*
5- Crie um laço for que some os números de 1 a 5. Crie uma variável soma fora do laço para guardar o
resultado. A cada volta do laço, adicione o número atual à variável soma. No final, exiba o resultado.
*/

let soma = 0;
for (let i = 1; i <= 5; i++) {
    soma += i; // soma = soma + i
}
alert("A soma dos números de 1 a 5 é: " + soma);

/*
6- Use um laço for para criar a tabuada do número 5, de 1 a 10. A saída deve ser no formato "5 x 1 = 5",
"5 x 2 = 10", e assim por diante.
*/
let numeroTabuada = 5;
console.log(`Tabuada do ${numeroTabuada}:`);
for (let i = 1; i <= 10; i++) {
    let resultado = numeroTabuada * i;
    console.log(`${numeroTabuada} x ${i} = ${resultado}`);
}

/**
7- Escreva um código usando o laço DO..While que faça a contagem REGRESSIVA de 10 ate 1.
    dica: Assim como valor++ soma 1 no valor atual, valor-- subtrai 1 do valor atual.
*/
console.log("Contagem regressiva de 10 a 1:");
let contador = 10;
do {
    console.log(contador);
    contador--;
} while (contador > 0);

/*   
8- Exibir números pares de 1 a 20,mostre apenas os pares de 1 a 20 usando for ou while.
*/
console.log("Números pares de 1 a 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }   
}

/*
9- Crie um jogo onde um numeroSecreto é definido como 15. Use um laço while para continuar "pedindo" um
palpite (simulado por uma variável palpite que você altera manualmente) até que o palpite seja igual ao
número secreto. A cada tentativa errada, exiba "Você errou, tente de novo!". Quando acertar, exiba
"Parabéns, você acertou!"
*/

let numeroSecreto = 15;
let palpite;
do {
    palpite = parseInt(prompt("Digite seu palpite:"));
    if (palpite !== numeroSecreto) {
        alert("Você errou, tente de novo!");
    }
} while (palpite !== numeroSecreto);
alert("Parabéns, você acertou!");

/**
10- Em uma promoção, você tem direito a sortear um número da sorte uma vez. Se o número sorteado for maior
que 50, você pode sortear de novo. Use um laço do...while para simular isso. O sorteio (simulado por uma
variável) acontece dentro do laço, e o laço continua enquanto o numeroSorteado for maior que 50.
 */

let numeroSorteado;
console.log("Sorteio de número da sorte:");
do {
    numeroSorteado = Math.floor(Math.random() * 100) + 1; // Sorteia um número de 1 a 100
    console.log(`Número sorteado: ${numeroSorteado}.`);
    if (numeroSorteado > 50) {
        console.log("Número maior que 50, sorteando novamente...");
    }
} while (numeroSorteado > 50);
alert(`Número final sorteado: ${numeroSorteado}`);

