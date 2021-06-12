import React from 'react';
import { View } from 'react-native';
import { HighligtCard } from '../../components/HighligtCard';
import { TransactionCard } from '../../components/TransactionCard';
import { Container, Header, User, UserInfo, UserGreeting, UserImage, UserName, UserWrapper, Icon, HighligtCards, Transactions, Title, TransactionList} from './styles';


export function Dashboard() {
  const data = [{
    type:'income',
    title:"Blados",
     amount:"R$ 6,000.00", 
     date:"Ontem", category:{name:'compras', icon:'coffee'}
  },{
    type:'income',
    title:"Coca-coca",
     amount:"R$ 2,000.00", 
     date:"Ontem", category:{name:'compras', icon:'dollar-sign'}
  },{
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
        
        keyExtractor={item => item.title}
        renderItem={({item})=><TransactionCard data={item}/>}
        
        />
        
      </Transactions>
    </Container>
  );
}