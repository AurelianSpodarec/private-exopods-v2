import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    
    const { auth, setUser } = context;

    return {
        setUser,
        auth,
        user: auth.user,
        isAuthenticated: auth.isAuthenticated,
    };
}


export default useAuth;
