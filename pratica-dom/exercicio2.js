// Exercício 1 — Mudar a Cor de Fundo ao Passar o Mouse
const caixaHover = document.getElementById('caixa-hover');
caixaHover.addEventListener('mouseover', () => {
  caixaHover.style.backgroundColor = 'lightblue';
});
caixaHover.addEventListener('mouseout', () => {
  caixaHover.style.backgroundColor = 'white';
});
////////////////////////////////////////////////////

// Exercício 2 — Esconder e Mostrar um Elemento:
document.getElementById('btn-toggle').addEventListener('click', () => {
  const p = document.getElementById('paragrafo5');
  if (p.style.display === 'none') {
    p.style.display = 'block';
  } else {
    p.style.display = 'none';
  }
});
////////////////////////////////////////////////

// Exercício 3 — Contar Cliques
let contador = 0;
document.getElementById('btn-cliques').addEventListener('click', () => {
  contador++;
  document.getElementById('contador').textContent = contador;
});
///////////////////////////////////////////////

// Exercício 4 — Modal
const modal = document.getElementById('modal');
const btnAbrirModal = document.getElementById('btn-abrir-modal');
const btnFecharModal = document.getElementById('fechar-modal');

btnAbrirModal.addEventListener('click', () => {
  modal.style.display = 'block';//block = bloco
});

btnFecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
