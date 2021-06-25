import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
  
export const Container = styled.View`
flex:1;
  background:${({theme})=>theme.colors.background};
`;

export const Header = styled.View`
background: ${({theme})=>theme.colors.primary};
width: 100%;
height: ${RFValue(113)}px;
align-items: center;
justify-content: flex-end;
padding-bottom: ${RFValue(19)}px;
`;
export const Title = styled.Text`
color: ${({theme})=>theme.colors.shape};
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(18)}px;
`;

export const Content = styled.ScrollView`
`;

export const ChartContainer = styled.View`
width: 100%;
align-items: center;
`;

export const MonthSelect = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;

margin-top: 24px;
`;
export const MonthSelectButton = styled(BorderlessButton)`
`;
export const SelectIcon = styled(Feather)`
color: ${({theme})=> theme.colors.primary};
font-size: ${RFValue(24)}px;
`;
export const Month = styled.Text`
font-family: ${({theme})=> theme.fonts.regular};
color: ${({theme})=> theme.colors.primary};
font-size: ${RFValue(20)}px;
`;
