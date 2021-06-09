import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';


export function HighligtCard() {
  return (
    <Container>
      <Header>
        <Title>
          Entrada
        </Title>
        <Icon name="arrow-up-circle"/>
      </Header>
      <Footer>
        <Amount>
          16,00
        </Amount>
        <LastTransaction>
          ontem
        </LastTransaction>
      </Footer>
    </Container>
  )
}