import React from 'react';
import { View } from 'react-native';

import { Container, Title, Amount } from './styles';

interface IHistoryCardProps{
  color:string;
  title:string;
  amount:string;
}

export function HistoryCard({color, title, amount}:IHistoryCardProps) {
  return (
    <Container color={color}> 
      <Title>
        {title}
      </Title>
      <Amount>
        {amount}
      </Amount>
    </Container>
  );
}   