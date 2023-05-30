var total = 0;

function adicionarAoCarrinho(produto, event) {
  event.preventDefault();
  var carrinho = document.getElementById("carrinho");

  // Define o preço do produto
  var preco = 0;
  if (produto === "Marmitex P") {
    preco = 15.00;
  } else if (produto === "Marmitex M") {
    preco = 17.00;
  } else if (produto === "Marmitex G") {
    preco = 20.00;
  } else if (produto === "Sprite lata" || produto === "Coca-Cola Zero lata" || produto === "Fanta Uva lata" || produto === "Água tônica Schweppes") {
    preco = 4.00;
  } else if (produto === "Água com gás" || produto === "Água sem gás") {
    preco = 3.00;
  }

  // Cria um item de lista para o produto
  var item = document.createElement("li");
  item.innerText = produto;

  // Cria um botão de exclusão para remover o item do carrinho
  var botaoExcluir = document.createElement("button");
  botaoExcluir.innerText = "Remover";
  botaoExcluir.classList.add("remover");

  // Adiciona um evento de clique para remover o item do carrinho
  botaoExcluir.addEventListener("click", function() {
    item.remove();
    botaoExcluir.remove();

    // Atualiza o total
    total -= preco;
    mostrarTotal();
  });

  // Cria um elemento de parágrafo para exibir o produto e o botão de exclusão
  var paragrafo = document.createElement("p");
  paragrafo.appendChild(item);
  paragrafo.appendChild(botaoExcluir);

  // Adiciona o item ao carrinho
  carrinho.appendChild(paragrafo);

  // Atualiza o total
  total += preco;
  mostrarTotal();
}


// Função para exibir o total no carrinho
function mostrarTotal() {
  var totalElement = document.getElementById("total");
  if (totalElement === null) {
    totalElement = document.createElement("p");
    totalElement.id = "total";
    document.body.appendChild(totalElement);
  }

  totalElement.innerText = "Total: R$" + total.toFixed(2);
}



  // Verifica a forma de pagamento selecionada
  function confirmarPedido() {
    var nomeCliente = document.getElementById("nome").value;
    var telefoneCliente = document.getElementById("telefone").value;
    var observacoes = document.getElementById("pedido").value;
    var endereco = document.getElementById("endereco").value;
    var carrinho = document.getElementById("carrinho");
    var formaPagamento = "";
    var opcaoEntregaRetirada = "";
  
    // Verifica a forma de pagamento selecionada
    var dinheiro = document.getElementById("dinheiro").checked;
    var cartao = document.getElementById("cartao").checked;
    var pix = document.getElementById("pix").checked;
  
    if (dinheiro) {
      formaPagamento = "Dinheiro";
    }
    if (cartao) {
      if (formaPagamento !== "") {
        formaPagamento += ", ";
      }
      formaPagamento += "Cartão";
    }
    if (pix) {
      if (formaPagamento !== "") {
        formaPagamento += ", ";
      }
      formaPagamento += "PIX";
    }
  
    // Verifica a opção de entrega ou retirada selecionada
    var entrega = document.getElementById("entrega").checked;
    var retirada = document.getElementById("retirada").checked;
  
    if (entrega) {
      opcaoEntregaRetirada = "Entrega";
    }
    if (retirada) {
      if (opcaoEntregaRetirada !== "") {
        opcaoEntregaRetirada += ", ";
      }
      opcaoEntregaRetirada += "Retirada";
    }
  
    // Verifica se algum campo está vazio
    if (nomeCliente === "" || telefoneCliente === "" || observacoes === "" || endereco === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    // Remove os botões "Remover" do carrinho antes de exibir o documento
    var botoesRemover = carrinho.getElementsByClassName("remover");
    for (var i = 0; i < botoesRemover.length; i++) {
      botoesRemover[i].remove();
    }
  
    // Obtém o texto dos elementos de parágrafo no carrinho
    var produtos = [];
    var itensCarrinho = carrinho.getElementsByTagName("li");
    for (var j = 0; j < itensCarrinho.length; j++) {
      produtos.push(itensCarrinho[j].textContent);
    }
  
    
  
    // Exibe o documento gerado em um elemento <textarea> na página
    var documentoPedido = "Nome: " + nomeCliente + "\n" +
    "Telefone: " + telefoneCliente + "\n" +
    "Endereço: " + endereco + "\n" +
    "Observações: " + observacoes + "\n" +
    "Produtos: \n" + produtos.join(", \n") + "\n" +
    "Forma de pagamento: " + formaPagamento + "\n" +
    "Opção de entrega/retirada: " + opcaoEntregaRetirada + "\n" +
    "Total: R$" + total.toFixed(2);

  // Exibe os dados do pedido em um alerta para o cliente revisar
  alert(documentoPedido);
  }
  
  
  

