import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { categoriesColor } from '../../utils/categories';

interface IContainerProps{
  category:string;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  background: ${({theme})=> theme.colors.shape };
  flex-direction: row;
  justify-content: space-between;

  padding: ${RFValue(13)}px ${RFValue(24)}px;
  border-radius: 5px;

  border-left-width:5px;
  border-left-color:${({category})=> categoriesColor[category]};

  margin-bottom: ${RFValue(8)}px;
`;


export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.regular };
  font-size: ${RFValue(15)}px;
`;



export const Amount = styled.Text`
   font-family: ${({theme})=> theme.fonts.bold };
   font-size: ${RFValue(15)}px;
`;
