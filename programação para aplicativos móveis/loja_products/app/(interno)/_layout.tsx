import { useAuth } from "@/context/auth";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Stack, Tabs } from "expo-router";
import {State} from "@/database/mockDB";

export default function RootLayout() {
  const { isLogged } = useAuth();
  const { cart } = State();

  if (!isLogged) return <Redirect href="/login" />;

  return <Tabs  screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}>
        <Tabs.Screen
        name="index"
        options={{
          title: "perfil",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}/>
      <Tabs.Screen
        name="estoque"
        options={{
          title: "estoque",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}/>
        <Tabs.Screen
        name="cart"
        options={{
          title: "carrinho" + (cart.length > 0 ? `(${cart.length})` : ""),
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}/>

      </Tabs>;
}
