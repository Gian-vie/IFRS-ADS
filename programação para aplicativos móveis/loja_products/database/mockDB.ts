export const State = () => ({
  users: [
    { login: "admin", password: "admin" },
    { login: "user", password: "user" },
  ],
  isAutenticated: false,
  products: [
    { id: 1, name: "Produto 1", price: 10.0, details: "Detalhes do Produto 1" },
    { id: 2, name: "Produto 2", price: 20.0, details: "Detalhes do Produto 2" },
    { id: 3, name: "Produto 3", price: 30.0, details: "Detalhes do Produto 3" },
  ],
  cart: [
    {
      id: 1,
      name: "Produto 1",
      price: 10.0,
      details: "Detalhes do Produto 1",
      quantity: 2,
    },
  ],
})
