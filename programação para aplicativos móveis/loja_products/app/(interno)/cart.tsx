import { useAuth } from "@/context/auth";
import { Button, Text, View } from "react-native";
import {State} from "@/database/mockDB";

export default function Home() {
  const { logout } = useAuth();
  const { cart } = State();
//   const produtos = products;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>Itens no carrinho</Text>
        {cart.map((item, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
                <Text>Nome: {item.name}</Text>
                <Text>Preço: R$ {item.price.toFixed(2)}</Text>
                <Text>Detalhes: {item.details}</Text>
                <Text>Quantidade: {item.quantity}</Text>
            </View>
        ))}


    </View>
  );
}
