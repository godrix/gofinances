import React from 'react';
import { View } from 'react-native';

import { Container, Title, Amount, Footer, Category, CategoryName, Icon, Date } from './styles';


export function TransactionCard() {
  return (<Container>
    <Title>
      Desenvolvimento de site
    </Title>
    <Amount>
    R$ 12.000,00
    </Amount>
    <Footer>
      <Category>
      <Icon name="dollar-sign"/> 
       <CategoryName>
         Vendas
       </CategoryName>
      </Category>
      <Date>
        21/12/2068
      </Date>
    </Footer>
  </Container>);
}