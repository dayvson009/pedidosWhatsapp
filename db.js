module.exports = {
  empresa: {
    id: 1,
    nomeEmpresa: "LIDIA'S RESTAURANTE E NAILTON DO GALETO",
    contato: "8198730-0247",
    endereco: "Endereço: Rua cambuca , 58 a - Areias / Recife",
    imagemPerfil:
      "https://s3.us-west-2.amazonaws.com/whatsmenu/production/lidia,srestauranteenailtondogaleto/tScreenshots_2022-10-10-16-27-41.png",
    capaPerfil:
      "https://s3.us-west-2.amazonaws.com/whatsmenu/production/lidia,srestauranteenailtondogaleto/tbReceita-de-Feijoada-Baiana-para-Almo%C3%A7o-de-Domingo-scaled.jpg",
  },
  
  horarioFuncionamento: {
    domingo: "07h00 às 15h00",
    segunda: "fechado",
    terca: "07h00 às 15h00",
    quarta: "07h00 às 15h00",
    quinta: "07h00 às 15h00",
    sexta: "07h00 às 15h00",
    sabado: "07h00 às 15h00",
  },

  categorias: [
    {
      id: 0,
      titulo: "Pratos pra 3 a 4 pessoas",
      order: 1,
    },
    {
      id: 1,
      titulo: "Pratos Executivos",
      order: 0,
    },
    {
      id: 2,
      titulo: "Simples na brasa",
      order: 2,
    },
    {
      id: 3,
      titulo: "Bebidas",
      order: 3,
    },
    {
      id: 4,
      titulo: "Porção",
      order: 4,
    },
  ],

  ItensComplementos: [
    {
      id: 0,
      nome: "Arroz",
      valor: 2.40
    },
    {
      id: 1,
      nome: "Vinagrete",
      valor: 0.25,
    },
    {
      id: 2,
      nome: "Purê",
      valor: 2.00,
    },
  ],

  produtos: [
    {
      id: 0,
      nome: "Galinha Cabidela",
      descricao: "Sem Descrição",
      preco: 16.50,
      imagem: "tgalinhaacabidelajpg.jpeg",
      categoria: 1,
      quantidade_max: 3,
      complementos: [
        {
          id: 0,
          titulocomplemento: "Opções de carne",
          quantidade_min: 1,
          quantidade_max: 1,
          obrigatorio: true,
          itens: [
            {
              id: 0,
              nome: "Arroz",
              descricao: "",
              quantidade_min: 0,
              quantidade_max: 4,
              valor: 2.40,
            },
          ],
        },
        {
          id: 1,
          titulocomplemento: "Opcoes de carne",
          quantidade_min: 0,
          quantidade_max: 5,
          obrigatorio: false,
          itens: [
            {
              id: 1,
              nome: "Vinagrete",
              descricao: "",
              quantidade_min: 0,
              quantidade_max: 2,
              valor: 0.25,
            },
            {
              id: 2,
              nome: "Purê",
              descricao: "",
              quantidade_min: 0,
              quantidade_max: 1,
              valor: 2.00,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      nome: "Panqueca de carne",
      descricao: "Sem Descrição",
      preco: 17.0,
      imagem: "tpanquecadecarnemoida270600squarejpg.jpeg",
      categoria: 0,
      quantidade_max: 999999,
      complementos: [
        {
          id: 0,
          titulocomplemento: "Opções de carne",
          quantidade_min: 1,
          quantidade_max: 4,
          obrigatorio: true,
          itens: [
            {
              id: 0,
              nome: "Arroz",
              descricao: "",
              quantidade_min: 0,
              quantidade_max: 4,
              valor: 2.40,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      nome: "Isca de tilápia na farinha panko",
      descricao: "Sem Descrição",
      preco: 18.0,
      imagem: "t36ca90bb2f055eae9e6aaa1fa69fe5bfjpg.jpeg",
      categoria: 0,
      quantidade_max: 5,
      complementos: [
        {
          id: 0,
          titulocomplemento: "Opções de carne",
          quantidade_min: 1,
          quantidade_max: 4,
          obrigatorio: true,
          itens: [
            {
              id: 0,
              nome: "Arroz",
              descricao: "",
              quantidade_min: 0,
              quantidade_max: 4,
              valor: 2.40,
            },
          ],
        },
        {
          id: 1,
          titulocomplemento: "Outras Opções",
          quantidade_min: 1,
          quantidade_max: 5,
          obrigatorio: true,
          itens: [
            {
              id: 2,
              nome: "Purê",
              valor: 2.00,
              descricao: "",
              quantidade_min: 0,
              quantidade_max: 4,
            }
          ],
        },
      ],
    },
  ],

  bairrosEntrega: [
    {
      nome: "Ibura",
      taxa: 4.0,
    },
  ],

  formaPagamento: ["dinheiro", "Debito", "Crédito", "Pix"],

  pedidos: []
};
