import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background:${({theme})=>theme.colors.secundary};
  border-radius: 5px;
  align-items: center;
  padding:${RFValue(18)}px;
`;

export const Label = styled.Text`
   font-family:${({theme})=>theme.fonts.regular};
   color:${({theme})=>theme.colors.shape};
   font-size:${RFValue(14)}px;
 
`;