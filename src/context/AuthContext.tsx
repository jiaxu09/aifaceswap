"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { account } from "@/lib/appwrite";
import { Models } from "appwrite";

interface AuthContextType {
  user: Models.User<Models.Preferences> | null;
  credits: number;
  isLoading: boolean;
  login: (user: Models.User<Models.Preferences>) => void;
  logout: () => Promise<void>;
  updateCredits: (newAmount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [credits, setCredits] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
      // Fallback to storing credits in preferences for now since we don't know the database ID yet
      const prefs = currentUser.prefs as any;
      setCredits(prefs?.credits || 0);
    } catch (err) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = (userData: Models.User<Models.Preferences>) => {
    setUser(userData);
    const prefs = userData.prefs as any;
    setCredits(prefs?.credits || 0);
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      setCredits(0);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const updateCredits = (newAmount: number) => {
    setCredits(newAmount);
  };

  return (
    <AuthContext.Provider value={{ user, credits, isLoading, login, logout, updateCredits }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
