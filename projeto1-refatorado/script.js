document.addEventListener('DOMContentLoaded', () => {

    // 1. JavaScript (Dados Iniciais)
    // Os caminhos agora apontam para a pasta "images" dentro do seu projeto
    const produtos = [
        { nome: "Teclado Mecânico RGB", preco: 350.00, emEstoque: true, imagem: "./imagens/teclado.jpeg" },
        { nome: "Mouse Gamer RGB", preco: 150.00, emEstoque: false, imagem: "./imagens/mouse.jpeg" },
        { nome: "Monitor Ultrawide 29''", preco: 1200.00, emEstoque: true, imagem: "./imagens/monitor.jpeg" },
        { nome: "Headset Gamer Pro", preco: 450.00, emEstoque: true, imagem: "./imagens/headset.jpeg" },
        { nome: "Webcam Full HD", preco: 220.00, emEstoque: false, imagem: "./imagens/webcam.jpeg" },
        { nome: "Cadeira Gamer", preco: 950.00, emEstoque: true, imagem: "./imagens/cadeira.jpeg" }
    ];

    // Constantes do DOM
    const productGrid = document.getElementById('product-grid');
    const btnDesconto = document.getElementById('btn-desconto');
    const btnFiltrar = document.getElementById('btn-filtrar');
    const btnMostrarTodos = document.getElementById('btn-mostrar-todos');
    const valorTotalEstoque = document.getElementById('valor-total-estoque');
    const logLoops = document.getElementById('log-loops');

    // Funções

    /**
     * Renderiza os produtos na página.
     * @param {Array<Object>} listaDeProdutos O array de produtos a ser renderizado.
     */
    const renderizarProdutos = (listaDeProdutos) => {
        // Limpa o conteúdo existente
        productGrid.innerHTML = '';

        listaDeProdutos.forEach(produto => {
            const card = document.createElement('article');
            card.classList.add('card');
            
            const precoFormatado = produto.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });

            const status = produto.emEstoque ? "Disponível" : "Esgotado";
            const statusClass = produto.emEstoque ? "" : "out-of-stock";

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" />
                <div class="card-body">
                    <h3>${produto.nome}</h3>
                    <p class="price">${precoFormatado}</p>
                    <p class="status ${statusClass}">${status}</p>
                </div>
            `;
            productGrid.appendChild(card);
        });
    };

    /**
     * Calcula e exibe o valor total dos produtos em estoque.
     */
    const exibirValorTotalEmEstoque = () => {
        const produtosEmEstoque = produtos.filter(produto => produto.emEstoque);
        const valorTotal = produtosEmEstoque.reduce((acumulador, produto) => acumulador + produto.preco, 0);

        valorTotalEstoque.textContent = valorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    /**
     * Demonstra e exibe o uso de diferentes laços de repetição.
     */
    const demonstrarLacosDeRepeticao = () => {
        let logContent = '';

        // For...of
        logContent += '<h3>For...of</h3>';
        for (const produto of produtos) {
            logContent += `<p>${produto.nome}</p>`;
        }

        // While
        logContent += '<h3>While</h3>';
        let i = 0;
        while (i < produtos.length) {
            logContent += `<p>${produtos[i].nome}</p>`;
            i++;
        }

        // Do...while
        logContent += '<h3>Do...while</h3>';
        let j = 0;
        if (produtos.length > 0) {
            do {
                logContent += `<p>${produtos[j].nome}</p>`;
                j++;
            } while (j < produtos.length);
        }

        logLoops.innerHTML = logContent;
    };

    // Event listeners dos botões
    btnDesconto.addEventListener('click', () => {
        const produtosComDesconto = produtos.map(produto => ({
            ...produto,
            preco: produto.preco * 0.9
        }));
        renderizarProdutos(produtosComDesconto);
    });

    btnFiltrar.addEventListener('click', () => {
        const produtosDisponiveis = produtos.filter(produto => produto.emEstoque);
        renderizarProdutos(produtosDisponiveis);
    });

    btnMostrarTodos.addEventListener('click', () => {
        renderizarProdutos(produtos);
    });

    // Carga inicial da página
    renderizarProdutos(produtos);
    exibirValorTotalEmEstoque();
    demonstrarLacosDeRepeticao();
});