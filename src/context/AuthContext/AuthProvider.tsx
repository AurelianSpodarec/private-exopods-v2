import { createContext, useState, ReactNode, useEffect  } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);


function AuthProvider({ children }: AuthConfig) {
    const navigate = useNavigate();
    const [auth, setAuth] = useState<Auth>({
        user: {
            name: "John Smith",
        },
        isAuthenticated: false,
    });

    function checkUserAccess() {
        if (auth.isAuthenticated) {
            navigate("/");
        } else {
            navigate("/auth/login");
        }
    }

    const setUser = (user: User) => {
        setAuth((prevAuth) => ({
            ...prevAuth,
            user,
        }));
    };

    const setAuthenticatedStatus = (value: boolean) => {
        setAuth((prevAuth) => ({
            ...prevAuth,
            isAuthenticated: value,
        }));
    };

    useEffect(() => {
        checkUserAccess();
    }, []);

    const contextValues: AuthContextValue = {
        auth,
        setUser,
        setAuthenticatedStatus,
    };

    return (
        <AuthContext.Provider value={contextValues}>
        {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

interface AuthConfig {
    children: ReactNode;
}

interface User {
    name: string;
}

interface Auth {
    user: User;
    isAuthenticated: boolean;
}

interface AuthContextValue {
    auth: Auth;
    setUser: (user: User) => void;
    setAuthenticatedStatus: (value: boolean) => void;
}