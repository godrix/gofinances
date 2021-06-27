import React, {createContext, useContext} from 'react';



interface AuthProviderProps{
  children:React.ReactNode
}

interface IUser{
  id:string,
  name:string;
  email:string;
  photo?:string;
}

interface AuthContextData{
  user:IUser
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}:AuthProviderProps){
  const user = {
    id:'123',
    name:'Carlos Godri',
    email:'c@gmail.com',
    photo:'https://github.com/godrix.png'
  }
  return (
    <AuthContext.Provider value={{user}}>
    {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};