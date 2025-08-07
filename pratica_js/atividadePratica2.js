/**
 * Fazer um código que peça ao usuário a sua idade e retorne se ele é maior ou menor de idade.
 */
let idade = prompt("Digite sua idade:");
if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}   

/**
 * Fazer um código que peça ao usuário um número e retorne se ele é par ou ímpar.
 */
let numero = prompt("Digite um número:");
if (numero % 2 === 0) {
    alert("O número é par.");
} else {
    alert("O número é ímpar.");
}
/**
 * Fazer um código que peça ao usuário uma senha e verifique se é igual a JAVASCRIPT123, se sim exiba 
 * "ACESSO PERMITIDO", se não exiba "ACESSO NEGADO".
 */
let senha = prompt("Digite a senha:");
if (senha === "JAVASCRIPT123") {
    alert("ACESSO PERMITIDO");
} else {
    alert("ACESSO NEGADO");
}   

/*Faça um código que verifique se o aluno foi aprovado, reprovado ou está de recuperação.
Aprovado se a nota for maior ou igual a 7, reprovado se for menor que 4 e recuperação se 
for entre 5 e 6. considerar que a nota é um número inteiro entre 0 e 10.
*/
let nota = parseInt(prompt("Digite a nota do aluno (0 a 10):"));
if (nota >= 7) {    
    alert("Aluno aprovado.");
} else if (nota >= 5 && nota < 7) {
    alert("Aluno em recuperação.");
} else {
    alert("Aluno reprovado.");
}