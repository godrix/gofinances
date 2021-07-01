import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { HighligtCard } from '../../components/HighligtCard';
import { TransactionCard, ITransactionCardData } from '../../components/TransactionCard';
import { Container, Header, User, UserInfo, UserGreeting, UserImage, UserName, UserWrapper, Icon, HighligtCards, Transactions, Title, TransactionList, LogoutButton} from './styles';
import { useFocusEffect } from '@react-navigation/native'
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';
import { useAuth } from '../../contexts/auth';

export interface IDataListProps extends ITransactionCardData{
  id:string;
  dateFormated?:string;
  amountFormated?:string;
}


export function Dashboard() {
  const [data, setData] = useState<IDataListProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [highlightData, setHighlightData] = useState({
    total:'',
    entries:'',
    expensive:'',
    lastExpensive:'',
    lastEntries:'',
    lastTotal:''
  });
  const {signOut, user} = useAuth();

  const fetchTransactions = async() => {
    const dataKey = '@gofinance:transactions';
    const dataStorage = await AsyncStorage.getItem(dataKey);
    const transactions = dataStorage ? JSON.parse(dataStorage) : []; 

    const totalized = transactions.reduce((acc, cur:IDataListProps)=>{
      const date = new Date(cur.date).getDate();
      const lastTotal = new Date(acc.lastTotal).getDate();
      const lastEntries = new Date(acc.lastEntries).getDate();
      const lastExpensive = new Date(acc.lastExpensive).getDate();

      if(cur.transactionType === 'income'){
        return {
          ...acc,
          entries:cur.amount + acc.entries,
          total:cur.amount + acc.total,
          lastTotal: date < lastTotal ? cur.date : acc.lastTotal,
          lastEntries: date < lastEntries ? cur.date : acc.lastEntries,
        }
      }
      return {
        ...acc,
        expensive: acc.expensive - Number(cur.amount),
        total:acc.total - Number(cur.amount),
        lastTotal: date < lastTotal ? cur.date : acc.lastTotal,
        lastExpensive: date < lastExpensive ? cur.date : acc.lastExpensive,
      }
    }, {
      total:0,
      lastTotal:0,
      entries:0,
      lastEntries:0,
      expensive:0,
      lastExpensive:0,
    });

   setHighlightData({
     entries:formatCurrency(totalized.entries),
     expensive:formatCurrency(totalized.expensive),
     total:formatCurrency(totalized.total),
     lastExpensive:`Ultima saida ${formatDate(totalized.lastExpensive)}`,
     lastEntries:`Ultima entrada ${formatDate(totalized.lastEntries)}`,
     lastTotal:`Ultima totalização ${formatDate(totalized.lastExpensive)}`,
   });

    const transactionsFormated: IDataListProps[] = transactions.map((item:IDataListProps) =>{
      const amount = formatCurrency(item.amount);

      const date = formatDate(item.date);

      return {
        ...item,
        dateFormated:date,
        amountFormated:amount
      }

    });

    setData(transactionsFormated);
    setIsLoading(false);
  };

  useFocusEffect(useCallback(()=>{
    fetchTransactions();
  },[]))


  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserImage source={{ uri: user?.photo}} />
            <User>
              <UserGreeting>
                Ola,
            </UserGreeting>
              <UserName>
                {user?.name}
            </UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={signOut}>
          <Icon name="power" />
          </LogoutButton>
        </UserWrapper>

      </Header>
      <HighligtCards >

        <HighligtCard 
        title="Entradas" 
        amount={highlightData.entries} 
        lastTransaction={highlightData.lastEntries} 
        loading={isLoading}
        type="up" />
        <HighligtCard loading={isLoading} title="Saidas" amount={highlightData.expensive} lastTransaction={highlightData.lastExpensive} type="down" />
        <HighligtCard  loading={isLoading} title="Total" amount={highlightData.total} lastTransaction={highlightData.lastTotal} type="total" />

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