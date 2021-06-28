import React from 'react';
import { Alert, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TitleWrapper, Title, SubTitle, Footer, FooterWrapper } from './styles';
import LogoSvg from '../../assets/svg/logo.svg';
import LogoApple from '../../assets/svg/apple-icon.svg';
import LogoGoogle from '../../assets/svg/google-icon.svg';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../contexts/auth';

export function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleLoginWithGoogle(){
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error);
      Alert.alert('Ops, ocorreu um erro', 'Não foi possivel conectar com a conta Google');
    }
   
  }
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg
          width={RFValue(120)}
          height={RFValue(68)}
          />
          <Title>
            Controle suas {'\n'} 
            finanças de forma {'\n'} 
            muito simples
          </Title>
        </TitleWrapper>
        <SubTitle>
          Faça login com uma conta abaixo
        </SubTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton svg={LogoGoogle} title="Entrar com Google" onPress={handleLoginWithGoogle}/>
          <SignInSocialButton svg={LogoApple} title="Entrar com Apple"/>
        </FooterWrapper>
      </Footer>
    </Container>
  )
}