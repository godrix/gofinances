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

export const Form = styled.View`
flex:1;
justify-content: space-between;
width: 100%;
padding: ${RFValue(24)}px;
`;

export const Fields = styled.View`

`;

export const TransactionType = styled.View`
flex-direction: row;
justify-content: space-between;
margin-top: ${RFValue(8)}px;
margin-bottom: ${RFValue(15)}px
`;


