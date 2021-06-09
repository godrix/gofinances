import React from 'react';
import { View } from 'react-native';
import { HighligtCard } from '../../components/HighligtCard';
import { Container, Header, User, UserInfo, UserGreeting, UserImage, UserName, UserWrapper, Icon, HighligtCards} from './styles';


export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>  
        <UserInfo>
          <UserImage source={{uri:'https://github.com/godrix.png'}}/>
          <User>
            <UserGreeting>
              Ola,
            </UserGreeting>
            <UserName>
              Fulano
            </UserName>
          </User>
        </UserInfo>
        <Icon name="power"/>
        </UserWrapper>
        
      </Header>
      <HighligtCards >
        
    <HighligtCard/>
    <HighligtCard/>
    <HighligtCard/>

    </HighligtCards>
    </Container>
  );
}