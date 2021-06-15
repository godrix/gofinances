import React, {useState} from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/common/Button';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/common/InputForm';
import { Select } from '../../components/common/Select';
import { TransactionTypeButton } from '../../components/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import { Container, Header, Title, Form , Fields, TransactionType} from './styles';

interface FormaData {
  name:string;
  amount:string
}

export function Register() {
  const [category, setCategory] = useState({
    key:'category',
    name:'Categoria'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const {
    control,
    handleSubmit
  } = useForm();

  function handleTransactionTypeSelect(type:'income'|'outcome'){
    setTransactionType(type)
  }

  function handleCloseCategoryModal(){
    setCategoryModalOpen(false)
  }

  function handleOpenCategoryModal(){
    setCategoryModalOpen(true)
  }

  function handleRegister({name, amount}:FormaData){
  
    const data = {
      name,
      amount,
      transactionType,
      category:category.key
    }

    console.log(data)
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

      
      <InputForm
        placeholder="nome"
        name="name"
        control={control}
      />
      <InputForm
        placeholder="preço"
        name="amount"
        control={control}
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
      <Button value="Cadastrar" onPress={handleSubmit(handleRegister)}/>
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