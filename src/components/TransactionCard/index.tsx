import React from 'react';
import { View } from 'react-native';
import { categories } from '../../utils/categories';

import { Container, Title, Amount, Footer, Category, CategoryName, Icon, Date } from './styles';

export interface ITransactionCardData{
  transactionType:'income'|'outcome',
  name:string;
  amount:string;
  category:string;
  date:string;
  
  dateFormated?:string;
  amountFormated?:string;
}

interface ITransactionCardProps{
  data:ITransactionCardData;
}

export function TransactionCard({data}:ITransactionCardProps) {
  const [category] = categories.filter(item => item.key === data.category);
  return (<Container>
    <Title>
      {data.name}
    </Title>
    <Amount type={data.transactionType}>
    {data.transactionType === 'outcome' && '-'} {data.amountFormated}
    </Amount>
    <Footer>
      <Category>
      <Icon name={category.icon}/> 
       <CategoryName>
         {category.name}
       </CategoryName>
      </Category>
      <Date>
        {data.dateFormated}
      </Date>
    </Footer>
  </Container>);
}