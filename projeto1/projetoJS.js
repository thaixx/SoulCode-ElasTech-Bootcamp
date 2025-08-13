/**Atividade em Dupla Integrada: Catálogo de Produtos Interativo

Requisitos:

3. JavaScript (Console Only)
- Declarar const produtos como array de objetos:
{ nome: string, preco: number, emEstoque: boolean }

- Exibir toda a estrutura de produtos com console.table(produtos).
- Calcular e exibir no console o valor total de itens em estoque utilizando filter + reduce.
- Criar um novo array de objetos com 10% de desconto em cada preço usando map e exibir com console.log.
- Filtrar apenas produtos disponíveis com filter e exibir no console.
- Iterar sobre produtos usando:
- for...of para imprimir o nome de cada produto.
- while para percorrer o array e exibir cada nome.
- do...while para fazer uma contagem regressiva de quantos itens faltam processar.

Critérios de Avaliação
- HTML está válido e semanticamente correto.
- CSS aplica Flexbox e Grid exatamente no cabeçalho e na seção de cards.
- JavaScript roda sem erros, usa apenas console.* e métodos de array 
- Clareza: mensagens no console são legíveis e informativas.

Entregue seus três arquivos em uma pasta compactada. Teste tudo no navegador antes de submeter e confira o console para garantir que os logs e tabelas apareçam conforme especificado. Boa codificação
 
 */

// Declarar const produtos como array de objetos
const produtos = [
  { nome: "Teclado Mecânico", preco: 350, emEstoque: true },
  { nome: "Mouse Gamer", preco: 150, emEstoque: false },
  { nome: "Monitor 27\"", preco: 1200, emEstoque: true },
  { nome: "Headset", preco: 250, emEstoque: true },
  { nome: "Webcam HD", preco: 200, emEstoque: false }
];

// Exibir toda a estrutura de produtos
console.log(" Lista de produtos:");
console.table(produtos);

// Calcular valor total de itens em estoque
const totalEmEstoque = produtos
  .filter(prod => prod.emEstoque)//filtrando pelo que esta como true
  .reduce((total, prod) => total + prod.preco, 0); //somando com o reduce
console.log(`Valor total em estoque: R$ ${totalEmEstoque.toFixed(2)}`);

// Criar novo array com 10% de desconto
const produtosComDesconto = produtos.map(prod => { //faz um map e "passa" pelos produtos uma função, que retorna sua informações com o valor atualizado 
  return {
    nome: prod.nome,
    preco: Number((prod.preco * 0.9).toFixed(2)), //number só pra garantir que vai ser sempre número
    emEstoque: prod.emEstoque
  };
});
console.log("Produtos com 10% de desconto:");
console.table(produtosComDesconto);

//exibir com console.log (valores com desconto):
let valoresComDesconto = []
for(let item of produtosComDesconto){
    valoresComDesconto.push(item.preco)
}
console.log("Apenas os valores:")
console.log(valoresComDesconto)

// Filtrar apenas produtos disponíveis
const disponiveis = produtos.filter(prod => prod.emEstoque);
console.log("Produtos disponíveis em estoque:");
console.table(disponiveis);

// Iterar com for...of
console.log("Lista de nomes (for...of):");
for (const prod of produtos) {
  console.log(prod.nome);
}

// Iterar com while
console.log("Lista de nomes (while):");
let i = 0;
while (i < produtos.length) {
  console.log(produtos[i].nome);
  i++;
}

// Contagem regressiva com do...while
console.log("Contagem regressiva de itens restantes:");
let restantes = produtos.length;
do {
  console.log(`Faltam processar ${restantes} item(ns)`);
  restantes--;
} while (restantes > 0);
