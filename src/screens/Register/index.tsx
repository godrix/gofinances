import React, {useState} from 'react';
import { View } from 'react-native';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { TransactionTypeButton } from '../../components/TransactionTypeButton';

import { Container, Header, Title, Form , Fields, TransactionType} from './styles';


export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelect(type:'income'|'outcome'){
    setTransactionType(type)
  }

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
      <TransactionType>
      <TransactionTypeButton 
      type="income" 
      title="Income" 
      isActive={transactionType === 'income'}
      onPress={()=>handleTransactionTypeSelect('income')}
      />
      <TransactionTypeButton 
      type="outcome" 
      title="Outcome"
      isActive={transactionType === 'outcome'}
      onPress={()=>handleTransactionTypeSelect('outcome')}
      />
      </TransactionType>
      <Select title="Categorias"/>
        </Fields>
      <Button value="Cadastrar"/>
      </Form>
      
    </Container>
  );
}