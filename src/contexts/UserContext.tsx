"use client";

import usePersistedState from "@/hooks/usePersistedState";
import { ReactNode, createContext, useState } from "react";

enum Role {
  ADMIN,
  MODERATOR,
  MASTER,
  ASSISTANT,
  PLAYER,
  VISITOR,
}

type User = {
  token: string;
  id: string;
  nick: string;
  email: string;
  role: Role;
};

type UserContextValue = {
  user: User;
  login(user: User): void;
  logout(user: User): void;
};

type UserProviderProps = {
  children: ReactNode;
};

const defaultUser = {
  token: "",
  id: "",
  nick: "",
  email: "",
  role: Role.VISITOR,
};

const UserContext = createContext<UserContextValue>({
  user: defaultUser,
  login: (user: User) => {},
  logout: () => {},
});

export function UserProvider({ children }: UserProviderProps) {
  const key = "user";
  // const [user, setUser] = usePersistedState<User>(key, defaultUser);
  const [user, setUser] = useState<User>(defaultUser);

  function login(user: User) {
    setUser(user);
    // localStorage.setItem(key, JSON.stringify(user));
  }

  function logout() {
    setUser(defaultUser);
    // localStorage.removeItem(key);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
