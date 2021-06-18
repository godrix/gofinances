import React from 'react';
import { View, TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Category, Icon } from './styles';

interface ISelectProps extends RectButtonProps {
  title:string
}

export function Select({title, ...rest}:ISelectProps) {
  return (
    <Container {...rest} activeOpacity={0.7}>
      <Category>
      {title}
      </Category>
      <Icon name="chevron-down"/>
    </Container>
  );
}