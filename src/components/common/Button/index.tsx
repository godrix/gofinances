import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Label } from './styles';

interface IButtonProps extends TouchableOpacityProps{
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