import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { HistoryCard } from '../../components/HistoryCard';

import { Container, Header, Title, Content } from './styles';

import {IDataListProps} from '../Dashboard'
import { categories } from '../../utils/categories';

export function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IDataListProps[]>([]);

  const fetchTransactions = async() => {
    const dataKey = '@gofinance:transactions';
    const dataStorage = await AsyncStorage.getItem(dataKey);
    const transactions:IDataListProps[] = dataStorage ? JSON.parse(dataStorage) : []; 


    const entriesTransactions = transactions.map(item => {
      if(item.transactionType === 'outcome'){

        return transactions.reduce((acc, elem)=>{
          if(elem.category === item.category){
            return {
              category:elem.category,
              amount:elem.amount +acc.amount
            }
          }

          return acc
        },{category:'',amount:0})
        
      }
    
    })

    const entriesFilter = [...new Set(entriesTransactions.map(obj => JSON.stringify(obj)))].map(s => JSON.parse(s))

    setData(entriesFilter);
    setIsLoading(false);
  };

  useFocusEffect(useCallback(()=>{
    fetchTransactions();
  },[]))
  return (
    <Container>
      <Header>
        <Title>
          Resumo por categoria
        </Title>
      </Header>
      <Content>
      {
        data.map(item => <HistoryCard data={item} key={item.category}/>)
      }
      </Content>
     
      
    </Container>
  )
}