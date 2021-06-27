import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TitleWrapper, Title, SubTitle, Footer, FooterWrapper } from './styles';
import LogoSvg from '../../assets/svg/logo.svg';
import LogoApple from '../../assets/svg/apple-icon.svg';
import LogoGoogle from '../../assets/svg/google-icon.svg';
import { SignInSocialButton } from '../../components/SignInSocialButton';

export function SignIn() {
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
          <SignInSocialButton svg={LogoGoogle} title="Entrar com Google"/>
          <SignInSocialButton svg={LogoApple} title="Entrar com Apple"/>
        </FooterWrapper>
      </Footer>
    </Container>
  )
}