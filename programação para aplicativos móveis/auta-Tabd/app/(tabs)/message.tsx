import { Text, View } from "react-native";


export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Bem-vindo à tela de mensagens!</Text>
    </View>
  );
}