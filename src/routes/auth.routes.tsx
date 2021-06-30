import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import {useTheme} from 'styled-components';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Resume } from '../screens/Resume';
import { SignIn } from '../screens/SignIn';

const {Navigator, Screen} = createStackNavigator();




export function AuthRoutes() {
  const theme = useTheme();
  return (
    <Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Screen
      name="SignIn"
      component={SignIn}
      />
    </Navigator>
  );
}