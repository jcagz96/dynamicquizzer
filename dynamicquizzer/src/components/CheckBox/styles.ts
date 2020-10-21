import styled, { css } from 'styled-components/native';

interface CheckBoxProps {
  isChecked: boolean;
}

export const CheckBox = styled.View<CheckBoxProps>`
  height: 20px;
  width: 20px;
  border-radius: 2px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  ${(props) =>
    props.isChecked &&
    css`
      height: 20px;
      width: 20px;
      border-radius: 2px;
      background-color: #04549b;
    `}
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;
