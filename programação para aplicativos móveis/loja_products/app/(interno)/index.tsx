import { useAuth } from "@/context/auth";
import { Button, Text, View } from "react-native";

export default function Home() {
  const { logout } = useAuth();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>tela interna.</Text>

      <Button title="Sair" onPress={() => logout()} />
    </View>
  );
}
