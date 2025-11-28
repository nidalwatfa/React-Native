import React, { createContext, useState, useContext, ReactNode } from 'react';

// 1. تعريف شكل البيانات
interface UserContextType {
  userName: string;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
}

const defaultContextValue: UserContextType = {
  userName: 'Guest',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

// 2. إنشاء السياق (Context)
export const UserContext = createContext<UserContextType>(defaultContextValue);

// 3. مكون المزود (Provider Component)
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>('نيدال');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const login = (name: string) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserName('زائر');
    setIsLoggedIn(false);
  };

  const contextValue: UserContextType = {
    userName,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// 4. Hook مخصص للاستخدام السهل
export const useUser = () => {
  return useContext(UserContext);
};
