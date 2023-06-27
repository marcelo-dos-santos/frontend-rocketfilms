import { createContext, useContext } from "react";
import { api } from "../services";
import { useState, useEffect } from "react";

export const AuthContext = createContext({})

function AuthProvider({children}) {
const [data, setData] = useState({});

async function signIn({email, password}){
    try{
        const response = await api.post("/sessions", {email, password});
        console.log(response)
        const {user, token} = response.data;
        localStorage.setItem("@rocketfilms:user", JSON.stringify(user));
        localStorage.setItem("@rocketfilms:token", JSON.stringify(token));
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({user, token})
    } catch(error) {
        if(error.response) {
            alert(error.response.data.message);
        } else {
            alert("Não foi possivel entrar");
        }
    }
}

function signOut() {
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setData({});
};

useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if(token && user){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({token, user:JSON.parse(user)})
    }
}, []);

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut, 
            user: data.user
            
            }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider, 
    useAuth
}