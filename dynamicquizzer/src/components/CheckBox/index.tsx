import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CheckBox, Container } from './styles';

interface CheckBoxProps {
  label: string;
  checked: boolean;
}

const CheckBoxCustom: React.FC<CheckBoxProps> = ({ checked, label }) => {
  return (
    <>
      <Container>
        <Text>{label}</Text>
        <CheckBox isChecked={checked} />
      </Container>
    </>
  );
};

export default CheckBoxCustom;
