Uma empresa está desenvolvendo um sistema para gerenciamento de pedidos de diferentes tipos de restaurantes.

O sistema deverá atender inicialmente a dois tipos de estabelecimentos:

    Hamburgueria
    Pizzaria

Cada tipo de estabelecimento possui uma família própria de produtos que podem fazer parte de um pedido.

Uma hamburgueria trabalha com:

    Hambúrguer;
    Bebida;
    Sobremesa.

Uma pizzaria trabalha com:

    Pizza;
    Bebida;
    Sobremesa.

O sistema deve garantir que os produtos criados pertençam à mesma família. Por exemplo, um pedido de uma hamburgueria não deve utilizar acidentalmente um produto específico de uma pizzaria.

Uma implementação inicial poderia criar diretamente os objetos:

new Hamburguer()
new Refrigerante()
new Sobremesa()

ou:

new Pizza()
new Refrigerante()
new Sobremesa()

Essa abordagem faz com que o código responsável pelo pedido conheça as classes concretas.

O objetivo da atividade é desenvolver uma solução na qual o código do pedido não conheça as classes concretas dos produtos, utilizando o padrão Abstract Factory.

Crie interfaces para representar os diferentes tipos de produtos.

Por exemplo:

ProdutoPrincipal
Bebida
Sobremesa

Cada interface deverá possuir pelo menos um método relacionado ao seu comportamento.

Exemplo:

ProdutoPrincipal
    + preparar()

Bebida
    + servir()

Sobremesa
    + preparar()


Crie os produtos específicos de cada família.

Para a família Hamburgueria:

Hamburguer
Refrigerante
SobremesaHamburgueria

Para a família Pizzaria:

Pizza
Refrigerante
SobremesaPizzaria

Os produtos devem implementar suas respectivas interfaces.

Cada produto deverá apresentar uma mensagem que permita identificar o tipo de produto criado.

Crie uma interface RestauranteFactory responsável por criar os produtos de uma família:

RestauranteFactory
    + criarProdutoPrincipal()
    + criarBebida()
    + criarSobremesa()
Crie duas fábricas:

HamburgueriaFactory
PizzariaFactory

 

A HamburgueriaFactory deverá criar somente produtos da família Hamburgueria.

Crie uma classe Pedido que receba uma RestauranteFactory.

A classe Pedido deverá utilizar a fábrica para criar os produtos necessários.

Ela não poderá instanciar diretamente os produtos concretos.

Por exemplo, o código da classe Pedido não deverá conter:

new Hamburguer()
new Pizza()

A criação deverá ocorrer através da fábrica:

factory.criarProdutoPrincipal()
factory.criarBebida()
factory.criarSobremesa()

Crie um programa que permita criar pedidos utilizando diferentes fábricas.

Por exemplo:

RestauranteFactory factory = new HamburgueriaFactory();

Pedido pedido = new Pedido(factory);

pedido.montar();

Depois, execute novamente utilizando:

RestauranteFactory factory = new PizzariaFactory();

Observe que o código da classe Pedido permanece exatamente o mesmo.

 

A PizzariaFactory deverá criar somente produtos da família Pizzaria.