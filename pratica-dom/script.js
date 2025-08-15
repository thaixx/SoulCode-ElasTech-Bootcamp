// Exercício 1 — Mudar Texto
document.getElementById('btn-texto').addEventListener('click', () => {
  document.getElementById('paragrafo1').textContent = "Texto alterado com sucesso!";
});

// Exercício 2 — Mudar Cor
document.getElementById('btn-cor').addEventListener('click', () => {
  document.getElementById('titulo2').style.color = 'red';
});

// Exercício 3 — Adicionar Item à Lista
document.getElementById('btn-adicionar').addEventListener('click', () => {
  const input = document.getElementById('input3');
  const valor = input.value.trim();
  if (valor !== "") {
    const li = document.createElement('li');
    li.textContent = valor;
    document.getElementById('lista3').appendChild(li);
    input.value = "";
  }else{
    alert("Digite um item")
  }
});
