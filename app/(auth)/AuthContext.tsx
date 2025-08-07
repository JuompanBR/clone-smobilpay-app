import { BACKEND_URL, beResourceMapping, messages } from "@/constants";
import { getAccountData } from "@/services";
import { useAppStore, usePersistentStore } from "@/stores";
import { useRouter } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";
interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
    loginError: boolean;
    loginErrorMessage: string;
    // user: { id: string; name: string } | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { isLoading, setIsLoading, setAccountData } = useAppStore();
    const persistentStore = usePersistentStore();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loginError, setLoginError] = useState<boolean>(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState<string>('');
    const router = useRouter();

    const login = async (username: string, password: string) => {
        let accountData = {};
        setIsLoading(true);
        setTimeout(async () => {
            if (username == 'admin' && password == 'admin') {
                try {
                    accountData = await getAccountData({ url: BACKEND_URL + beResourceMapping.user, userId: 102054 });
                } catch (e) {
                    setLoginError(true);
                    if (e instanceof Error) {
                        setLoginErrorMessage(messages.errorOccured + ": " + e.message);
                    } else {
                        setLoginErrorMessage(messages.errorOccured);
                    }
                }
                setIsAuthenticated(true);
                setIsLoading(false);
                persistentStore.resetLoginAttemptsLeft();

                // assuming the db call returns the user data upon login
                // I fetch the user data directly with the id

                router.push("/");
            } else {
                persistentStore.reduceLoginAttemptsLeft();
                setLoginError(true);
                setLoginErrorMessage(messages.incorrectPassword + '. Attemp(s) left: ' + persistentStore.loginAttemptsLeft);
                setIsLoading(false);
                setIsAuthenticated(false);
            }
        }, 1000);
    };
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loginError, loginErrorMessage }}>
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
export default AuthProvider;
