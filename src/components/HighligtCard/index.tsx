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

interface IHighligtyCard{
  title:string;
  amount:string;
  lastTransaction:string;
  type:'up'|'down'|'total'
}

const icon = {
  up:'arrow-up-circle',
  down:'arrow-down-circle',
  total:'dollar-sign',
}

export function HighligtCard({title, amount, lastTransaction, type}:IHighligtyCard) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>
          {title}
        </Title>
        <Icon name={icon[type]} type={type}/>
      </Header>
      <Footer>
        <Amount type={type}>
          {amount}
        </Amount>
        <LastTransaction type={type}>
          {lastTransaction}
        </LastTransaction>
      </Footer>
    </Container>
  )
}