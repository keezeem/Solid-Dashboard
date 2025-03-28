// context/UserContext.tsx
'use client'; // Add this line

// import React, { createContext, useState, useEffect, useContext } from 'react';

import { createContext, useContext, ReactNode, useState } from 'react';

interface UserContextType {
  subscriptionPlan: string | null;
  subscriptionPrice: number | null;
  setUserSubscription: (plan: string, price: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [subscriptionPlan, setSubscriptionPlan] = useState<string | null>(null);
  const [subscriptionPrice, setSubscriptionPrice] = useState<number | null>(null);

  const setUserSubscription = (plan: string, price: number) => {
    setSubscriptionPlan(plan);
    setSubscriptionPrice(price);
  };

  return (
    <UserContext.Provider value={{ subscriptionPlan, subscriptionPrice, setUserSubscription }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}