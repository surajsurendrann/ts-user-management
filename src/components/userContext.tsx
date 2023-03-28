import React, { createContext, useEffect, useState } from "react";
import { stockData } from "../data";

export interface User {
  name: string;
  email: string;
  designation : string;
}

interface UserContextType {
  users: User[];
  addUser: (newUser: User) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>({
  users: [],
  addUser: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("allusers");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      localStorage.setItem("allusers", JSON.stringify(stockData));
    }
  }, []);

  const addUser = (newUser: User) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("allusers", JSON.stringify(updatedUsers));
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
