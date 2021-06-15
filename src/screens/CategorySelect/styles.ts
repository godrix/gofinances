import { RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';
import styled from 'styled-components/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

interface ICategoryProps{
  isActive:boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex:1;
  background: ${({theme})=>theme.colors.background};
`;

export const Header = styled.View`
width: 100%;
height: ${RFValue(113)}px;
background: ${({theme})=>theme.colors.primary};
align-items: center;
justify-content: center;
padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=>theme.fonts.regular};
  color: ${({theme})=>theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.TouchableOpacity<ICategoryProps>`
width: 100%;
padding: ${RFValue(18)}px;


flex-direction: row;
align-items: center;

${({isActive, theme})=> isActive && `background: ${theme.colors.secundary_light};`}


`;

export const Icon = styled(Feather)`
 font-size: ${RFValue(20)}px;
 margin-right:  ${RFValue(16)}px; 
`;

export const Name = styled.Text`
 font-family: ${({theme})=>theme.fonts.regular};
 font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
 height: 1px;
 width: 100%;
 background: ${({theme})=>theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
