/*
 Exercício 1 – Saudação com nome
    Crie um programa que solicite ao usuário seu nome e, em seguida, exiba no console a seguinte mensagem:
    "Olá, [nome]! Seja bem-vindo(a)."
*/

const nome = prompt("Digite seu nome:");
console.log(`Olá, ${nome}! Seja bem-vindo(a).`);

/*
Exercício 2 – Soma de dois números
Solicite ao usuário dois números e exiba no console o resultado da soma entre eles.
Dica: use Number() ou parseInt() para converter o que o usuário digitou de texto para número.
*/
const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));
const soma = numero1 + numero2;
console.log(`A soma dos números é: ${soma}`);

/*
Exercício 3 – Mensagem com nome e idade
Peça ao usuário que digite seu nome e sua idade, e exiba a seguinte mensagem no console:
  "Sua média é: x.xx"
   Dica: use o .toFixed(2) para trabalhar as casas decimais 
*/

const nomeUsuario = prompt("Digite seu nome:");
const idadeUsuario = Number(prompt("Digite sua idade:"));   
console.log(`Olá, ${nomeUsuario}! Você tem ${idadeUsuario} anos.`);

/*
Exercício 4 – Cálculo do dobro
Peça ao usuário um número qualquer e exiba no console o dobro desse número.
*/

const numeroQualquer = Number(prompt("Digite um número qualquer:"));
const dobro = numeroQualquer * 2;
console.log(`O dobro de ${numeroQualquer} é: ${dobro}`);

/*
Exercício 5 – Área de um retângulo
Solicite a base e a altura de um retângulo ao usuário e exiba no console a área calculada.
Fórmula: área = base * altura
*/
const base = Number(prompt("Digite a base do retângulo:"));
const altura = Number(prompt("Digite a altura do retângulo:"));
const area = base * altura;
console.log(`A área do retângulo é: ${area}`);

/*
 Exercício 6 – Desconto em produto
Peça ao usuário o preço de um produto e um desconto em porcentagem. Exiba no console o valor final com o desconto aplicado.

Exemplo de saída:
" Preço original: R$ 100.00
  Desconto: 10%
  Preço com desconto: R$ 90.00"
*/
const precoOriginal = Number(prompt("Digite o preço do produto:"));
const descontoPercentual = Number(prompt("Digite o desconto em porcentagem:"));
const desconto = (precoOriginal * descontoPercentual) / 100;
const precoComDesconto = precoOriginal - desconto;  
console.log(`Preço original: R$ ${precoOriginal.toFixed(2)}
Desconto: ${descontoPercentual}%    
Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);

/*
Exercício 7 – Nome completo
Solicite ao usuário o primeiro nome e o sobrenome, e exiba o nome completo no console.

Exemplo de saída:
"Seu nome completo é: João Silva"
*/
const primeiroNome = prompt("Digite seu primeiro nome:");
const sobrenome = prompt("Digite seu sobrenome:");  
const nomeCompleto = `${primeiroNome} ${sobrenome}`;
console.log(`Seu nome completo é: ${nomeCompleto}`);

/*
 Exercício 8 – Confirmação de cadastro
Crie um programa que:

Pergunte ao usuário, com o comando confirm(), se ele deseja se cadastrar em um site.
Se o usuário clicar em "OK", utilize prompt() para solicitar:
O nome completo
A idade
Depois, exiba no console a seguinte mensagem:
"Cadastro realizado com sucesso!
  Nome: [nome]
  Idade: [idade]"

Se o usuário clicar em "Cancelar", exiba no console:  
   "Cadastro cancelado pelo usuário."

Dica para os alunos:
confirm() retorna true se o usuário clicar em "OK" e false se clicar em "Cancelar".
Pesquisar estrutura condicional if...else para tratar os dois casos. */
const desejaCadastrar = confirm("Deseja se cadastrar no site?");
if (desejaCadastrar) {
    const nomeCompletoCadastro = prompt("Digite seu nome completo:");
    const idadeCadastro = Number(prompt("Digite sua idade:"));
    console.log(`Cadastro realizado com sucesso!`);
    console.log(`Nome: ${nomeCompletoCadastro}`);
    console.log(`Idade: ${idadeCadastro}`);
} else {
    console.log("Cadastro cancelado pelo usuário.");
}
