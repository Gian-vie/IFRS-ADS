import { handleUrlParams } from "expo-router/build/fork/getStateFromPath-forks";
import { replace } from "expo-router/build/global-state/routing";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const handleLogin = () => {
    // if()
    
    console.log("Login realizado com sucesso!");
    return replace("/game");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login</Text>

      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
