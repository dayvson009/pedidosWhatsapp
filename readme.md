# Sistema de gestão de pedido simples com Socket

O sistema de pedido será formado por 4 telas diferentes, atualizados em **TEMPO REAL** com **SOCKET**

* **Cliente** -> Onde mostra os pratos o cliente vai adicionando ao pedido e personalizando com os itens desejados.

* **Painel de Pedido** -> Todo pedido que chega é mostrado no painel, podendo cancelar ou aprovar o pedido.

* **Cozinha** -> Nessa tela mostra todos os pedidos aprovados, ordenadas por data/hora do pedido. mostrando os itens adicionais de cada prato. Podendo iniciar o pedido e Finalizar.
    * Quando clicado em iniciar, muda o status para (preparando)
    * Quando estiver preparando, tem um outro botão (Finalizar)

* **Devilery** -> Todos os pedidos prontos, serão mostrados aqui na aba delivery, com informações de local de entrega, forma de pagamento, valor e troco.

Banco em JSON: https://www.youtube.com/watch?v=Zej3O0o7v4o

Estrutura do Banco de dados

EMPRESA: []
  nome empresa,
  contato,
  endereço,
  imagem perfil,
  capa do perfil

FORMA PAGAMENTO:
  Dinheiro
    troco (valor - troco pra quanto?)
  Debito
    bandeira (Visa, Master, Elo)
  Crédito
    bandeira (Visa, Master, Elo)
  Pix
    Tipo Chave:
    Chave (Chave pix)

HORÁRIO DE FUNCIONAMENTO: []
  segunda,
  terça,
  quarta,
  quinta,
  sexta,
  sabado,
  domingo

BAIRROS ENTREGA: []
  bairro,
  taxa

PRATOS: []
  imagem, 
  categoria, 
  valor, 
  descricao
  acompanhamentos:
    titulo acompanhamento,
    limite_acompanhamentos,
    obrigatorio: true/false


PEDIDO: []
  Valor total,

  cliente:
    nome,
    whatsapp,
    
  prato1:
    Id do pedido,
    Observacoes,
    Quantidade
  entrega:
    Endereco,
    Número, [s/n]
    Complemento,
    Ponto de referência
    UF
    Cidade
    Bairro,

