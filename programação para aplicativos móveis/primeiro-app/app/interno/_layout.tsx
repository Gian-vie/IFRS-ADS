import { Redirect, Stack } from "expo-router";

export default function RootLayout() {
  const estaConectado = true;

if (!estaConectado) {
  return Redirect("/loguin");
}

  return <Stack >
    <Stack.Screen name="index" options={{title: "Home", headerShown: true}} />
    <Stack.Screen name="+not-found" options={{title: "Not Found",headerShown: false}} />
    <Stack.Screen name="list" options={{title: "List"}} />
    <Stack.Screen name="list2" options={{title: "List 2"}} />
    <Stack.Screen name="[id]" options={{title: "detalhes"}} />
  </Stack>
}
