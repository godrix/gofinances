import React from 'react';
import { View } from 'react-native';

import { Container, Category, Icon } from './styles';

interface ISelectProps {
  title:string
}

export function Select({title}:ISelectProps) {
  return (
    <Container>
      <Category>
      {title}
      </Category>
      <Icon name="chevron-down"/>
    </Container>
  );
}