import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Label } from './styles';

interface IButtonProps extends RectButtonProps{
  value:string;
  onPress:()=>void;
}

export function Button({value, onPress, ...rest}:IButtonProps) {
  return (
    <Container {...rest} onPress={onPress}>
      <Label>
{value}
      </Label>
    </Container>
  )
}