import { createContext, useState, useContext, ReactNode } from "react";
import { State } from "@/database/mockDB";

type Product = {
  id: number;
  name: string;
  price: number;
  details: string;
};

type CartItem = Product & {
  quantity: number;
};

type AuthContextType = {
  isLogged: boolean;
  login: (req: { name: string; password: string }) => void;
  logout: () => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
};

const Context = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: any) {
  const [isLogged, setIsLogged] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(State().cart);
  const { users } = State();

  function login(req: { name: string; password: string }) {
    if (
      users.some(
        (user) => user.login === req.name && user.password === req.password,
      )
    ) {
      setIsLogged(true);
    } else {
      alert("Login ou senha incorretos!");
    }
  }

  const logout = () => setIsLogged(false);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Context.Provider value={{ isLogged, login, logout, cart, addToCart }}>
      {children}
    </Context.Provider>
  );
}
