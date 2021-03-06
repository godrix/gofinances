import React, {createContext, useContext, useState, useEffect} from 'react';
import * as Google  from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GOOGLE_AUTH_ID } from '../configs/auth';


interface AuthProviderProps{
  children:React.ReactNode
}

interface IUser{
  id:string,
  name:string;
  email:string;
  photo:string;
}

interface AuthContextData{
  user:IUser | null,
  signInWithGoogle():Promise<void>;
  signInWithApple():Promise<void>;
  signed:boolean;
  signOut():Promise<void>;
  isLoading:boolean;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}:AuthProviderProps){
  const [user, setUser] = useState<IUser |null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function signInWithGoogle(){
    try {
      const response = await Google.logInAsync({
        androidStandaloneAppClientId: GOOGLE_AUTH_ID,
        clientId: GOOGLE_AUTH_ID,
        scopes:['profile', 'email']
      })

      if(response.type === 'success'){
        const userLogged = {
          id:String(response.user.id!),
          email:response.user.email!,
          name:response.user.name!,
          photo:response.user.photoUrl!,
        }

        setUser(userLogged);
        await AsyncStorage.setItem(`@gofinances:user:${user?.email}`, JSON.stringify(userLogged));

        console.log(userLogged);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signInWithApple(){
    try {
   
        const userLogged = {
          id:String(Math.random()),
          email:'email@email.com',
          name:'Teste',
          photo:'https://github.com/godrix.png',
        }

        setUser(userLogged);
        await AsyncStorage.setItem(`@gofinances:user:${user?.email}`, JSON.stringify(userLogged));

    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut(){
    setUser(null);
    await AsyncStorage.removeItem(`@gofinances:user:${user?.email}`)
  }

  useEffect(()=>{
     async function loadStorage(){
      const userStorage = await AsyncStorage.getItem(`@gofinances:user:${user?.email}`);

      if(userStorage){
        const userLogged = JSON.parse(userStorage) as IUser;

        setUser(userLogged);
      }

      setIsLoading(false);


     }

     loadStorage();
    },[]);

  return (
    <AuthContext.Provider value={{user, signInWithGoogle, signInWithApple, signed:!!user, signOut, isLoading}}>
    {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};
