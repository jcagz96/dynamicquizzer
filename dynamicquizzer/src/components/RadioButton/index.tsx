import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Radio, Container } from './styles';

interface RadioButtonProps {
  label: string;
  checked: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked, label }) => {
  return (
    <>
      <Container>
        <Text>{label}</Text>
        <Radio isChecked={checked} />
      </Container>
    </>
  );
};

export default RadioButton;
