// Base Imports
import React, { FC, createContext } from 'react';
import useLocalStorageState from '../hooks/localStorageState';

export interface ContextObj {
    activeNavItem: string;
    setActiveNavItem: (t: string) => void;
    isMinimized: boolean;
    setIsMinimized: (t: boolean) => void;
    activePage: number;
    setActivePage: (t: number) => void;
}

export const Context = createContext<ContextObj>({ 
    activeNavItem: 'overview', setActiveNavItem: () => { }, 
    isMinimized: false, setIsMinimized: () => { },
    activePage: 1, setActivePage: () => { },
});

export const ContextProvider: FC<any> = ({ children }) => {
    const [activeNavItem, setActiveNavItem] = useLocalStorageState('overview', 'overview');
    const [isMinimized, setIsMinimized] = useLocalStorageState('isMinimized', false);
    const [activePage, setActivePage] = useLocalStorageState('activePage', 1);

    return <Context.Provider value={{ 
        activeNavItem, setActiveNavItem, isMinimized, setIsMinimized, activePage, setActivePage }}>
        {children}
    </Context.Provider>
}