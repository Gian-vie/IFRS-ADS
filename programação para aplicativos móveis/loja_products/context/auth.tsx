import { createContext, useState, useContext, ReactNode } from "react";
import { State } from "@/database/mockDB";

type AuthContextType = {
  isLogged: boolean;
  login: (req: { name: string; password: string }) => void;
  logout: () => void;
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

  return (
    <Context.Provider value={{ isLogged, login, logout }}>
      {children}
    </Context.Provider>
  );
}
