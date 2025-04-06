"use client";

import { useEffect, useState, createContext, ReactNode } from "react";

interface UserContextType {
  user: UserData | null;
  loginUser: (userData: UserData) => void;
  logoutUser: () => void;
}

const DefaultContext: UserContextType = {
  user: null,
  loginUser: () => {},
  logoutUser: () => {},
};

export const UserContext = createContext<UserContextType>(DefaultContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const loginUser = (userData: UserData) => {
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const logoutUser = () => {
    if (!user) {
      return;
    }
    setUser(null);
    sessionStorage.removeItem("user");
  };

  useEffect(() => {
    if (user?.access_token) {
      sessionStorage.setItem("user", JSON.stringify(user));
    }
    if (!user) {
      if (sessionStorage.getItem("user")) {
        setUser(JSON.parse(sessionStorage.getItem("user")));
      }
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
