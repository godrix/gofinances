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
} from '@expo-google-fonts/poppins'
import { isLoaded } from 'expo-font';
import AppLoading from 'expo-app-loading'
import { Register } from './src/screens/Register';
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './src/routes';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor={theme.colors.primary} />
      <NavigationContainer>
      {/* <Routes/> */}
      <SignIn/>
      </NavigationContainer>
    </ThemeProvider>
  );
}
