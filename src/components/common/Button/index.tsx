import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Label } from './styles';

interface IButtonProps extends RectButtonProps{
  value:string
}

export function Button({value, ...rest}:IButtonProps) {
  return (
    <Container {...rest}>
      <Label>
{value}
      </Label>
    </Container>
  )
}