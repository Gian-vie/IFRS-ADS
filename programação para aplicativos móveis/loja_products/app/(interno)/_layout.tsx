import { useAuth } from "@/context/auth";
import { Redirect, Stack } from "expo-router";

export default function RootLayout() {
  const { isLogged } = useAuth();

  if (!isLogged) return <Redirect href="/login" />;

  return <Stack />;
}
