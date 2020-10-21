import styled, { css } from 'styled-components/native';

interface RadioProps {
  isChecked: boolean;
}

export const Radio = styled.View<RadioProps>`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  ${(props) =>
    props.isChecked &&
    css`
      height: 20px;
      width: 20px;
      border-radius: 10px;
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
