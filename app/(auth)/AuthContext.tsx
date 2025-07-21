import useAppStore from "@/stores/appStore";
import { useRouter } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    // user: { id: string; name: string } | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const {isLoading, setIsLoading} = useAppStore();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const router = useRouter();

    const login = () => {
        setIsLoading(true);
        setTimeout(() => {  
            setIsAuthenticated(true)
            setIsLoading(false);
            router.push("/");
        }, 0);
    };
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};

export { AuthProvider, useAuth };

