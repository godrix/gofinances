import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {ThemeProvider} from 'styled-components/native'
import theme from './src/global/styles/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './src/routes';
import { SignIn } from './src/screens/SignIn';
import { AuthProvider, useAuth } from './src/contexts/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const {isLoading} = useAuth()

  if(!fontsLoaded || isLoading){
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor={theme.colors.primary} />
      <NavigationContainer>
        <AuthProvider>
        <Routes/>
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
