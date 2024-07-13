import axios from "axios";
import { createContext, useEffect, useState } from "react";
import apiClient from "../utils/api";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await apiClient.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await apiClient.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};