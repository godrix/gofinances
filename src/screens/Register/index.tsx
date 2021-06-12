import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

import { Container, Header, Title, Form , Fields} from './styles';


export function Register() {
  return (
    <Container>
      <Header>
        <Title>
          Cadastro
        </Title>
      </Header>
      <Form>
        <Fields>

      
      <Input
      placeholder="nome"
      />
           <Input
      placeholder="preço"
      />
        </Fields>
      <Button value="Cadastrar"/>
      </Form>
      
    </Container>
  );
}