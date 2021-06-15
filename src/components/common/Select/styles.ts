import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  background: ${({theme})=>theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  padding: ${RFValue(18)}px ${RFValue(16)}px;
`;

export const Category = styled.Text`
  font-family: ${({theme})=>theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme})=>theme.colors.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme})=>theme.colors.text};
`;