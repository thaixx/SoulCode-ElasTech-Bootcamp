/*1- (Funções Simples)
Escreva uma Função que retorna "Olá, Mundo!"
*/

function olaMundo() {
    return "Olá, Mundo!";
}

/*
2- Função que soma dois números
*/

function soma(a, b) {
    return a + b;
}

/*
3- Função que verifica se um número é par
*/

function isPar(numero) {
    return numero % 2 === 0;
} 

/*
4- Função que converte Celsius para Fahrenheit
*/

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/*
5- Função que retorna o maior entre dois números
*/

function maiorNumero(a, b) {
    return a > b ? a : b;
}

/*
Nível 2: Arrow Functions Básica
6-Arrow function que retorna "Bom dia!"
*/

const bomDia = () => "Bom dia!";

/*
7- Arrow function que multiplica dois números
*/

const multiplica = (a, b) => a * b;

/*
8- Arrow function que calcula o quadrado de um número
*/

const quadrado = numero => numero * numero;

/*
9- Arrow function que retorna o comprimento de uma string
*/

const comprimentoString = str => str.length;

/*
10- Crie uma função calculaIdade que receba o ano de nascimento e o ano atual e retorne a idade da pessoa.* 
 */

function calculaIdade(anoNascimento, anoAtual) {
    return anoAtual - anoNascimento;
}   