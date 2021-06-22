import React from 'react';
import { View } from 'react-native';
import { categoriesName } from '../../utils/categories';
import { formatCurrency } from '../../utils/formatCurrency';

import { Container, Title, Amount } from './styles';

interface IHistoryCardProps{
  data:{
    amount:number;
    category:string;
  }
}

export function HistoryCard({data}:IHistoryCardProps) {
  return (
    <Container category={data.category}> 
      <Title>
        {categoriesName[data.category]}
      </Title>
      <Amount>
        {formatCurrency(data.amount)}
      </Amount>
    </Container>
  );
}   