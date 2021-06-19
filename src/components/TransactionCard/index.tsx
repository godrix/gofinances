import React from 'react';
import { View } from 'react-native';

import { Container, Title, Amount, Footer, Category, CategoryName, Icon, Date } from './styles';

interface ICategory{
  name:string;
  icon:string
}
export interface ITransactionCardData{
  transactionType:'income'|'outcome',
  name:string;
  amount:string;
  category:ICategory;
  date:string;
  
  dateFormated?:string;
  amountFormated?:string;
}

interface ITransactionCardProps{
  data:ITransactionCardData;
}

export function TransactionCard({data}:ITransactionCardProps) {
  return (<Container>
    <Title>
      {data.name}
    </Title>
    <Amount type={data.transactionType}>
    {data.transactionType === 'outcome' && '-'} {data.amountFormated}
    </Amount>
    <Footer>
      <Category>
      <Icon name={data.category.icon}/> 
       <CategoryName>
         {data.category.name}
       </CategoryName>
      </Category>
      <Date>
        {data.dateFormated}
      </Date>
    </Footer>
  </Container>);
}