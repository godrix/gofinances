import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface ITransactionType{
  type:'income'|'outcome';
  isActive:boolean
}



export const Container = styled.View<ITransactionType>`
  width: 48%;

  
  border-radius: 5px;

  ${({isActive})=> !isActive && css`border:1.5px solid ${({theme})=>theme.colors.text};` }

  ${({isActive, theme, type})=> isActive && type === 'income' && css`
  background-color: ${theme.colors.success_light};
  `}

  ${({isActive, theme, type})=> isActive && type === 'outcome' && css`
  background-color: ${theme.colors.attention_light};
  `}

  
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:${RFValue(16)}px;
  `

export const Icon = styled(Feather)<ITransactionType>`
  font-size: ${RFValue(24)}px;
  margin-right:${RFValue(12)}px;
  color:${({theme, type})=> type === 'income' ? theme.colors.success : theme.colors.attention };
`;
export const Title = styled.Text`
  color:${({theme})=>theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=>theme.fonts.regular};
  `