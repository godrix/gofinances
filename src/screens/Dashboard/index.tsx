import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { HighligtCard } from '../../components/HighligtCard';
import { TransactionCard, ITransactionCardData } from '../../components/TransactionCard';
import { Container, Header, User, UserInfo, UserGreeting, UserImage, UserName, UserWrapper, Icon, HighligtCards, Transactions, Title, TransactionList, LogoutButton} from './styles';
import { useFocusEffect } from '@react-navigation/native'

export interface IDataListProps extends ITransactionCardData{
  id:string;
  dateFormated?:string;
  amountFormated?:string;
}


export function Dashboard() {
  const [data, setData] = useState<IDataListProps[]>([]);

  const fetchTransactions = async() => {
    const dataKey = '@gofinance:transactions';
    const dataStorage = await AsyncStorage.getItem(dataKey);
    const transactions = dataStorage ? JSON.parse(dataStorage) : []; 

    const transactionsFormated: IDataListProps[] = transactions.map((item:IDataListProps) =>{
      const amount = Number(item.amount).toLocaleString('pt-BR', {
        style:'currency',
        currency:'BRL'
      })

      const date = Intl.DateTimeFormat('pt-BR', {
        day:'2-digit',
        month:'2-digit',
        year:'2-digit'
      }).format(new Date(item.date));

      return {
        ...item,
        dateFormated:date,
        amountFormated:amount
      }

    });

    setData(transactionsFormated);
  };

  useFocusEffect(useCallback(()=>{
    fetchTransactions();
  },[]))


  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserImage source={{ uri: 'https://github.com/godrix.png' }} />
            <User>
              <UserGreeting>
                Ola,
            </UserGreeting>
              <UserName>
                Fulano
            </UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={()=>{}}>
          <Icon name="power" />
          </LogoutButton>
        </UserWrapper>

      </Header>
      <HighligtCards >

        <HighligtCard title="Entradas" amount="R$ 17,00" lastTransaction="Ontem ao meio dia" type="up" />
        <HighligtCard title="Saidas" amount="R$ 23,00" lastTransaction="Ontem ao meio dia" type="down" />
        <HighligtCard title="Total" amount="R$ 50,00" lastTransaction="Ontem ao meio dia" type="total" />

      </HighligtCards>
      <Transactions>
        <Title>
          Listagem
        </Title>
        <TransactionList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item})=><TransactionCard data={item}/>}
        
        />
        
      </Transactions>
    </Container>
  );
}