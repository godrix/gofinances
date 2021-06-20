import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder'
import {LinearGradient} from 'expo-linear-gradient'
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

interface IHighligtyCard{
  title:string;
  amount:string;
  lastTransaction:string;
  type:'up'|'down'|'total'
  loading?:boolean
}

const icon = {
  up:'arrow-up-circle',
  down:'arrow-down-circle',
  total:'dollar-sign',
}

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

export function HighligtCard({title, amount, lastTransaction, type, loading=false}:IHighligtyCard) {
  return (
    <Container type={type}>
      <Header>
      <Title type={type}>
          {title}
        </Title>
      
        <Icon name={icon[type]} type={type}/>
      </Header>
      <Footer>
      <ShimmerPlaceHolder visible={!loading}  height={RFValue(80)} width={RFValue(120)}>
        <Amount type={type}>
          {amount}
        </Amount>
        </ShimmerPlaceHolder>
        <ShimmerPlaceHolder visible={!loading}  height={RFValue(10)} width={RFValue(120)} style={{marginTop:15}}>
        <LastTransaction type={type}>
          {lastTransaction}
        </LastTransaction>
        </ShimmerPlaceHolder>
      </Footer>
    </Container>
  )
}