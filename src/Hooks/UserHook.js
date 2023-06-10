import {createContext, useContext, useState} from 'react';

const user = {
    idUser : '',
    username : '',
    password : '',
    password_hash : '',
    created_at : ''
}

const ContextUser = createContext({
    user : user,
    isLogin : false,
    sigIn : ()=>{},
})

export const useUser = ()=>{
    return useContext(ContextUser);
}

export default function UserContext({children}) {
    const [isLogin, setIsLogin] = useState(false);

    const signIn =()=>{
        setIsLogin(true)
    }
    
     return (
        <ContextUser.Provider value={{isLogin, signIn}} >
            {children}
        </ContextUser.Provider>
    )
}