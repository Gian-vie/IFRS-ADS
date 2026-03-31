import { useAuth } from "@/context/auth";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { State } from "@/database/mockDB";

export default function Home() {
  const { logout, cart, addToCart } = useAuth();
  const { products } = State();

  const handleAddToCart = (index: number) => {
    addToCart(products[index]);
    console.log("Produto adicionado ao carrinho");
  };

  //   const produtos = products;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Itens em estoque</Text>        <Text>Carrinho: {cart.reduce((total, item) => total + item.quantity, 0)} itens</Text>      {products.map((item, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text>Nome: {item.name}</Text>
          <Text>Preço: R$ {item.price.toFixed(2)}</Text>
          <Text>Detalhes: {item.details}</Text>
          <TouchableOpacity onPress={() => handleAddToCart(index)}>
            <Text>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
