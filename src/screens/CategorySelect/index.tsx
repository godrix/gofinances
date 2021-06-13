import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { Button } from '../../components/common/Button';
import { categories } from '../../utils/categories';

import { Container, Header, Title, Category, Icon, Name, Separator, Footer} from './styles';

interface ICategory{
  key:string;
  name:string;
}

interface IcategorySelectProps{
  category:string;
  setCategory:(name:string) => void;
  closeSelectCategory:()=>void;
}


export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
}:IcategorySelectProps) {
  return (
    <Container>
      <Header>
        <Title>
          Categoria
        </Title>
      </Header>
      <FlatList 
      data={categories}
      style={{flex:1, width:'100%'}}
      keyExtractor={item => item.key}
      renderItem={({item})=> (
        <Category>
          <Icon name={item.icon}/>
          <Name>{item.name}</Name>
        </Category>
      )}

      ItemSeparatorComponent={()=> <Separator/>}
      />
      
      <Footer>
       <Button value="Selecionar"/>
      </Footer>
    </Container>
  )
}