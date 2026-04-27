import { useState } from "react";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = async () => {
    if (!login || !pwd) {
      alert("Por favor, preencha ambos os campos de login e senha.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: login, pwd: pwd }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login bem-sucedido! Token: " + data.token);
        try {
          const token = data.token;
          await AsyncStorage.setItem("token", token);
        } catch (error) {
          console.error("Erro ao salvar token:", error);
        }
      } else {
        alert("Login falhou: " + data.message);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Ocorreu um erro ao tentar fazer login.");
    }
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
      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />

      <Text>
        {login}, {pwd}
      </Text>

      <Button title="Entrar" onPress={() => handleLogin()} />
    </View>
  );
}
