import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {VictoryPie} from 'victory-native';
import { View } from 'react-native';
import { HistoryCard } from '../../components/HistoryCard';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import { Container, Header, Title, Content, ChartContainer, MonthSelect, MonthSelectButton, SelectIcon, Month } from './styles';

import {IDataListProps} from '../Dashboard'
import { categories, categoriesColor, categoriesName } from '../../utils/categories';
import theme from '../../global/styles/theme';

export function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IDataListProps[]>([]);

  const fetchTransactions = async() => {
    const dataKey = '@gofinance:transactions';
    const dataStorage = await AsyncStorage.getItem(dataKey);
    const transactions:IDataListProps[] = dataStorage ? JSON.parse(dataStorage) : []; 

    const expensivesTotal = transactions.filter(item => item.transactionType === 'outcome')
    .reduce((acc, item)=>{
      return item.amount + acc
    },0);

    console.log('total', expensivesTotal)

    const expensivesTransactions = transactions.map(item => {
      if(item.transactionType === 'outcome'){

        return transactions.reduce((acc, elem)=>{
          if(elem.category === item.category){
            const sum = elem.amount +acc.amount;
            return {
              category:elem.category,
              amount: sum,
              color:categoriesColor[elem.category],
              name:categoriesName[elem.category],
              percentage: `${(sum / expensivesTotal * 100).toFixed()}%`
            }
          }

          return acc
        },{category:'',amount:0, color:'', name:'', percentage:''})
        
      }
    
    })

    const expensivesFilter = [...new Set(expensivesTransactions.map(obj => JSON.stringify(obj)))].map(s => JSON.parse(s));


    setData(expensivesFilter);
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
      <Content
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:16,
        paddingBottom:useBottomTabBarHeight()
      }} 
      >
        <MonthSelect>
          <MonthSelectButton>
            <SelectIcon name="chevron-left"/>
          </MonthSelectButton>
          <Month>
          Junho
          </Month>
          <MonthSelectButton>
            <SelectIcon name="chevron-right"/>
          </MonthSelectButton>
        </MonthSelect>
        <ChartContainer>
        <VictoryPie
        data={data}
        colorScale={data.map(item => item.color)}
        style={{
          labels:{
            fontWeight:'bold',
            fill:theme.colors.shape
          }
        }}
        labelRadius={50}
        x="percentage"
        y="amount"
        />
        </ChartContainer>
        
      {
        data.map(item => <HistoryCard data={item} key={item.category}/>)
      }
      </Content>
     
      
    </Container>
  )
}