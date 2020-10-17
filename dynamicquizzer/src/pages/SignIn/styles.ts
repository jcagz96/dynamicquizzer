import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: red;
  border-radius: 4px;
  padding: 8px;
  margin: 2px;
`;

export const CustomButtonText = styled.Text`
  color: blue;
  font-weight: bold;
`;
