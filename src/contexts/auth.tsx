import React, {createContext, useContext, useState, useEffect} from 'react';
import * as Google  from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
        androidStandaloneAppClientId:'2googleusercontent.com',
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
        await AsyncStorage.setItem('@gofinaces:user', JSON.stringify(userLogged));

        console.log(userLogged);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut(){
    setUser(null);
    await AsyncStorage.removeItem('@gofinaces:user')
  }

  useEffect(()=>{
     async function loadStorage(){
      const userStorage = await AsyncStorage.getItem('@gofinaces:user');

      if(userStorage){
        const userLogged = JSON.parse(userStorage) as IUser;

        setUser(userLogged);
      }

      setIsLoading(false);


     }

     loadStorage();
    },[]);

  return (
    <AuthContext.Provider value={{user, signInWithGoogle, signed:!!user, signOut, isLoading}}>
    {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};
