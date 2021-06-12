import React from 'react';
import { View } from 'react-native';

import { Container, Title, Amount, Footer, Category, CategoryName, Icon, Date } from './styles';

interface ICategory{
  name:string;
  icon:string
}
interface ITransactionCardProps{
  data:{
  type:'income'|'outcome',
  title:string;
  amount:string;
  category:ICategory;
  date:string;
  }
  
}

export function TransactionCard({data}:ITransactionCardProps) {
  return (<Container>
    <Title>
      {data.title}
    </Title>
    <Amount type={data.type}>
    {data.type === 'outcome' && '-'} {data.amount}
    </Amount>
    <Footer>
      <Category>
      <Icon name={data.category.icon}/> 
       <CategoryName>
         {data.category.name}
       </CategoryName>
      </Category>
      <Date>
        {data.date}
      </Date>
    </Footer>
  </Container>);
}