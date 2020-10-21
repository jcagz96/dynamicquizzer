import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isChecked: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isChecked && //* ***
    css`
      background-color: red;
    `}
`;
