import React from 'react';
import { View } from 'react-native';
import { HighligtCard } from '../../components/HighligtCard';
import { TransactionCard, ITransactionCardData } from '../../components/TransactionCard';
import { Container, Header, User, UserInfo, UserGreeting, UserImage, UserName, UserWrapper, Icon, HighligtCards, Transactions, Title, TransactionList} from './styles';

export interface IDataListProps extends ITransactionCardData{
  id:string
}


export function Dashboard() {
  const data : IDataListProps[] = [{
    id:'1',
    type:'income',
    title:"Blados",
     amount:"R$ 6,000.00", 
     date:"Ontem", category:{name:'compras', icon:'coffee'}
  },{
    id:'2',
    type:'income',
    title:"Coca-coca",
     amount:"R$ 2,000.00", 
     date:"Ontem", category:{name:'compras', icon:'dollar-sign'}
  },{
    id:'3',
    type:'outcome',
    title:"Fruvis",
     amount:"R$ 1,000.00", 
     date:"Ontem", category:{name:'Alimentação', icon:'dollar-sign'}
  }]
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
          <Icon name="power" />
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