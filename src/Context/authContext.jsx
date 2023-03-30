import { createContext, useState } from "react";

export const AuthCheck = createContext();

const AuthContext = ({children}) =>{

    const [authValues, setAuthValues] = useState(null);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthCheck.Provider value={{authValues, setAuthValues, isSignedUp, setIsSignedUp, isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthCheck.Provider>
    )
}

export default AuthContext