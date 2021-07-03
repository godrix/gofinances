import React, {useState, useEffect} from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { Button } from '../../components/common/Button';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/common/InputForm';
import { Select } from '../../components/common/Select';
import { TransactionTypeButton } from '../../components/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { Container, Header, Title, Form , Fields, TransactionType} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/native';
interface FormaData {
  name:string;
  amount:string
}

const schema = Yup.object().shape({
  name:Yup.string().required('Nome é obrigatorio'),
  amount:Yup.number().typeError('Informe um valor numerico').positive('O valor não pode ser négativo')
  .required('O campo preço é obrigatorio')
})

export function Register() {
  const navigation =  useNavigation();
  
  const [category, setCategory] = useState({
    key:'category',
    name:'Categoria'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm({
    resolver:yupResolver(schema)
  });

  function handleTransactionTypeSelect(type:'income'|'outcome'){
    setTransactionType(type)
  }

  function handleCloseCategoryModal(){
    setCategoryModalOpen(false)
  }

  function handleOpenCategoryModal(){
    setCategoryModalOpen(true)
  }

  async function handleRegister({name, amount}:FormaData){
    const dataKey = '@gofinance:transactions';
    if(!transactionType){
      Alert.alert('Selecione o tipo da transação');
      return
    }

    if(category.key === 'category'){
      Alert.alert('Selecione a categoria');
      return
    }
  
    const data = {
      id: String(uuid.v4()),
      name,
      amount,
      transactionType,
      category:category.key,
      date: new Date()
    }

    try {
      const dataStorage = await AsyncStorage.getItem(dataKey);
      const currentData = dataStorage ? JSON.parse(dataStorage) : []; 

      const dataFormated = JSON.stringify([data, ...currentData])

      await AsyncStorage.setItem(dataKey, dataFormated);

      setTransactionType('');
      setCategory({key:'category',name:'Categoria'});
      reset();
      navigation.navigate('Listagem');
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel cadastrar');
    }

    console.log(data)
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        error={errors.name && errors.name.message}
        autoCapitalize="sentences"
        autoCorrect={false}
      />
      <InputForm
        placeholder="preço"
        keyboardType="numeric"
        error={errors.amount && errors.amount.message}
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
    </TouchableWithoutFeedback>
  );
}