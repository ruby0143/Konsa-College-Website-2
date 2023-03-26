import { createContext, useState } from "react";

export const AuthCheck = createContext();

const AuthContext = ({children}) =>{

    const [authValues, setAuthValues] = useState(null);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isLogined, setIsLogined] = useState(false);

    return (
        <AuthCheck.Provider value={{authValues, setAuthValues}}>
            {children}
        </AuthCheck.Provider>
    )
}

export default AuthContext