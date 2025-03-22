// context/UserContext.tsx
'use client'; // Add this line

import React, { createContext, useState, useEffect, useContext } from 'react';

type UserContextType = {
  subscriptionPlan: string | null;
  setSubscriptionPlan: (plan: string | null) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [subscriptionPlan, setSubscriptionPlan] = useState<string | null>(null);

  // Initialize the subscription plan from local storage on component mount
  useEffect(() => {
    const savedPlan = localStorage.getItem('subscriptionPlan');
    if (savedPlan) {
      setSubscriptionPlan(savedPlan);
    }
  }, []);

  return (
    <UserContext.Provider value={{ subscriptionPlan, setSubscriptionPlan }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};