const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const db = require('./db');

// Define o diretório para servir os arquivos estáticos
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// Rota Cliente
app.get('/cliente', (req, res) => {
  res.render('client', {empresa : db.empresa, produtos: db.produtos, categorias: db.categorias});
});

// Rota Pedido
app.get('/pedidos', (req, res) => {
  res.render('pedidos');
});

// Rota Cozinha
app.get('/cozinha', (req, res) => {
  res.render('cozinha');
});

// Rota Entrega
app.get('/entrega', (req, res) => {
  res.render('./entrega');
});

// Evento de conexão com o socket
io.on('connection', (socket) => {
  console.log('Nova conexão estabelecida');

  // ----------- Pedido --------------
  // Evento de recebimento de pedido
  socket.on('pedido', (pedido) => {
    console.log('Pedido recebido:', pedido);

    // Envia o pedido para todos os clientes conectados
    io.emit('pedidoRecebido', pedido);
  });

  // ----------- Cozinha --------------
  // Evento de aceitação de pedido
  socket.on('preparar', (apreparar) => {
    console.log('Pedido recebido:', apreparar);

    // Envia o pedido para Cozinha
    io.emit('apreparar', apreparar);
  });

  // ----------- Entrega --------------
  // Evento de aceitação de pedido
  socket.on('entrega', (paraentrega) => {
    console.log('Pedido recebido para entrega:', paraentrega);

    // Envia o pedido para Cozinha
    io.emit('paraentrega', paraentrega);
  });

  // ----------- Finalizado --------------
  // Evento de aceitação de pedido
  socket.on('finalizado', (finalizado) => {
    console.log('Pedido Finalizado:', finalizado);
  });
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
