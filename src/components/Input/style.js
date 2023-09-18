import styled from "styled-components";

// Estilos para o input
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
  @media (max-width: 600px) {
    width: 100%;
  }

  &:focus {
    border-color: #007bff;
  }
`;
