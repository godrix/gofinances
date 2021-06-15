import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider} from 'styled-components/native'
import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { isLoaded } from 'expo-font';
import AppLoading from 'expo-app-loading'
import { Register } from './src/screens/Register';
import { CategorySelect } from './src/screens/CategorySelect';

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
      <Register/>
    </ThemeProvider>
  );
}
