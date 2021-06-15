import React, {useState} from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { TransactionTypeButton } from '../../components/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import { Container, Header, Title, Form , Fields, TransactionType} from './styles';


export function Register() {
  const [category, setCategory] = useState({
    key:'category',
    name:'Categoria'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleTransactionTypeSelect(type:'income'|'outcome'){
    setTransactionType(type)
  }

  function handleCloseCategoryModal(){
    setCategoryModalOpen(false)
  }

  function handleOpenCategoryModal(){
    setCategoryModalOpen(true)
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
      <Select 
      onPress={handleOpenCategoryModal}
      title={category.name}/>
        </Fields>
      <Button value="Cadastrar"/>
      </Form>

      <Modal visible={categoryModalOpen} animationType="slide">
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseCategoryModal}
        />
      </Modal>
      
    </Container>
  );
}