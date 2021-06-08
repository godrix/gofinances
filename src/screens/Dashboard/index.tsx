import React from 'react';
import { View } from 'react-native';

import { Container, Header, User, UserInfo, UserGreeting, UserImage, UserName, UserWrapper } from './styles';


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

        </UserWrapper>
      </Header>
    </Container>
  );
}