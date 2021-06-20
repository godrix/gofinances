import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import {useTheme} from 'styled-components';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Resume } from '../screens/Resume';

const {Navigator, Screen} = createBottomTabNavigator();




export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
    tabBarOptions={{
      activeTintColor:theme.colors.secundary,
      inactiveTintColor:theme.colors.text,
      labelPosition:'beside-icon',
      style:{
        paddingVertical: Platform.OS === 'ios'?20:0,
        height: RFValue(60)
      }
    }}
    >
      <Screen
      name="Listagem"
      component={Dashboard}
      options={{
        tabBarIcon:({size, color})=>(
          <MaterialIcons 
          name="format-list-bulleted"
          size={size}
          color={color}
          />
        )
      }}
      />
      <Screen
      name="Cadastro"
      component={Register}
      options={{
        tabBarIcon:({size, color})=>(
          <MaterialIcons 
          name="attach-money"
          size={size}
          color={color}
          />
        )
      }}
      />
       <Screen
      name="Resumo"
      component={Resume}
      options={{
        tabBarIcon:({size, color})=>(
          <MaterialIcons 
          name="pie-chart"
          size={size}
          color={color}
          />
        )
      }}
      />
    </Navigator>
  );
}