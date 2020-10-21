import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, CustomButton, CustomButtonText } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  function handleSignIn(): void {
    navigation.navigate('SignUp');
  }
  function handleMainPage(): void {
    navigation.navigate('MainPage');
  }
  function handleMainPage2(): void {
    navigation.navigate('MainPage2');
  }

  return (
    <Container>
      <Text>signin page | First Commit Arruda</Text>
      <CustomButton onPress={handleSignIn}>
        <CustomButtonText>Go to Signup</CustomButtonText>
      </CustomButton>
      <CustomButton onPress={handleMainPage}>
        <CustomButtonText>Questão de uma opção</CustomButtonText>
      </CustomButton>
      <CustomButton onPress={handleMainPage2}>
        <CustomButtonText>Questão de várias opções</CustomButtonText>
      </CustomButton>
    </Container>
  );
};

export default SignIn;
