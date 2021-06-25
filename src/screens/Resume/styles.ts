import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

  
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