import { createContext, useState, useContext, ReactNode } from "react";

const Context = createContext({});
export function useAuth() {
  return useContext(Context);
}

export function AuthProvider({ children }: any) {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  return (
    <Context.Provider value={{ isLogged, login, logout }}>
      {children}
    </Context.Provider>
  );
}
