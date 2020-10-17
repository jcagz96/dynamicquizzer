import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, CustomButton, CustomButtonText } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  function handleSignIn(): void {
    navigation.navigate('SignUp');
  }

  return (
    <Container>
      <Text>signin page</Text>
      <CustomButton onPress={handleSignIn}>
        <CustomButtonText>Go to Signup</CustomButtonText>
      </CustomButton>
    </Container>
  );
};

export default SignIn;
