import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem("authToken");
      const storedUser = localStorage.getItem("userData");

      if (
        token &&
        storedUser &&
        storedUser !== "undefined" &&
        storedUser !== "null"
      ) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } else {
        // cleanup bad data
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
      }
    } catch (err) {
      console.error("Error loading user from localStorage:", err);
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (token, userData) => {
    if (!token || !userData) {
      console.error("Invalid login data:", { token, userData });
      return;
    }

    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setUser(null);
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    return !!token;
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
