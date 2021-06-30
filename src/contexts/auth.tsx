import React, {createContext, useContext, useState} from 'react';
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
  user:IUser,
  signInWithGoogle():Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}:AuthProviderProps){
  const [user, setUser] = useState<IUser>({} as IUser);

  async function signInWithGoogle(){
    try {
      const response = await Google.logInAsync({
        androidStandaloneAppClientId:'',
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

  return (
    <AuthContext.Provider value={{user, signInWithGoogle}}>
    {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};
