const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const db = require('./db');
const fs = require("fs");
const statusPedido = ['novo', 'aprovado', 'preparando', 'pronto', 'a caminho', 'entregue']

function saveData(){
  fs.writeFile("db.json", JSON.stringify(db), err => {
    if (err) throw err; 

    console.log("Dados Salvos");
  });
}

// Define o diretório para servir os arquivos estáticos
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// Rota Cliente
app.get('/cliente', (req, res) => {
  res.render('client', {empresa : db.empresa, produtos: db.produtos, categorias: db.categorias, bairros: db.bairrosEntrega, pagamento: db.formaPagamento});
});

// Rota Pedido
app.get('/pedidos', (req, res) => {
  const novosPedidos = db.pedidos.filter(pedido => statusPedido.includes(pedido.status))
  res.render('pedidos', {novosPedidos});
});

// Rota Cozinha
app.get('/preparo', (req, res) => {
  const preparar = db.pedidos.filter(pedido => [statusPedido[1], statusPedido[2]].includes(pedido.status));
  res.render('preparo', {preparar});
});

// Rota Entrega
app.get('/entrega', (req, res) => {
  const entrega = db.pedidos.filter(pedido => [statusPedido[3], statusPedido[4]].includes(pedido.status));
  res.render('./entrega', {entrega});
});

// Evento de conexão com o socket
io.on('connection', (socket) => {
  const novoCliente = socket.handshake.headers.referer;
  const url = novoCliente.split(`${socket.handshake.headers.host}/`);
  if(url[1] == "cliente"){
    db.countClient++
    saveData();
  }


  // ----------- Pedido --------------
  // Evento de recebimento de pedido
  socket.on('pedido', (pedido) => {
    pedido.id = db.pedidos.length;
    db.pedidos.push(pedido)
    saveData();

    const novosPedidos = db.pedidos.filter(pedido => statusPedido.includes(pedido.status));

    // Envia o pedido para todos os clientes conectados
    io.emit('pedidoRecebido', novosPedidos);
  });

    // Evento de pedido rejeitado
    socket.on('rejeitar', (idPedido) => {
      const indexPedido = db.pedidos.findIndex(pedido => pedido.id == idPedido);
      //Remover do array -- mais como o cliente precisa ter o status, preciso deixar só status rejeitado;
      // db.pedidos.splice(indexPedido,1);
      db.pedidos[indexPedido].status = "rejeitado";
      saveData();
    });

  // ----------- Preparo --------------
  // Evento de aceitação de pedido e adicionado a cozinha
  socket.on('preparar', (idPedido) => {
    const indexPedido = db.pedidos.findIndex(pedido => pedido.id == idPedido);
    db.pedidos[indexPedido].status = "aprovado";
    saveData();

    //Filtra só os aprovados e preparando
    const preparar = db.pedidos.filter(pedido => [statusPedido[1], statusPedido[2]].includes(pedido.status));
    io.emit('apreparar', preparar);

    //Atualizar a lista
    const novosPedidos = db.pedidos.filter(pedido => statusPedido.includes(pedido.status));
    io.emit('pedidoRecebido', novosPedidos);
  });
  
  // Evento de Preparação do produto
  socket.on('preparando', (idPedido) => {
    const indexPedido = db.pedidos.findIndex(pedido => pedido.id == idPedido);
    db.pedidos[indexPedido].status = "preparando";
    saveData();
    
    //Filtra só os aprovados e preparando
    const preparar = db.pedidos.filter(pedido => [statusPedido[1], statusPedido[2]].includes(pedido.status));
    io.emit('apreparar', preparar);

    const novosPedidos = db.pedidos.filter(pedido => statusPedido.includes(pedido.status));
    io.emit('pedidoRecebido', novosPedidos);
  });


  // ----------- Entrega --------------
  // Evento de Preparação do produto
  socket.on('pronto', (idPedido) => {
    const indexPedido = db.pedidos.findIndex(pedido => pedido.id == idPedido);
    db.pedidos[indexPedido].status = "pronto";
    saveData();
    
    //Filtra só os aprovados e preparando
    const preparar = db.pedidos.filter(pedido => [statusPedido[1], statusPedido[2]].includes(pedido.status));
    io.emit('apreparar', preparar);
    
    //Filtra só os aprovados e preparando
    const entrega = db.pedidos.filter(pedido => [statusPedido[3], statusPedido[4]].includes(pedido.status));
    io.emit('paraentrega', entrega);

    const novosPedidos = db.pedidos.filter(pedido => statusPedido.includes(pedido.status));
    io.emit('pedidoRecebido', novosPedidos);
  });

  // ----------- Finalizado --------------
  // Evento de aceitação de pedido
  socket.on('finalizado', (finalizado) => {
    console.log('Pedido Finalizado:', finalizado);
  });
});

// Inicia o servidor na porta 3000
server.listen(3004, () => {
  console.log('Servidor rodando na porta 3004');
});
