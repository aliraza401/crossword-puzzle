import styled from "styled-components";

export const CrosswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputRow = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const ClueInput = styled.input`
  flex: 1;
  margin-right: 10px;
`;

export const AnswerInput = styled.input`
  flex: 1;
  margin-right: 10px;
`;

export const RowColInput = styled.input`
  flex: 0.5;
  margin-right: 10px;
`;

export const AddButton = styled.button`
  font-size: 20px;
  padding: 2px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e8e8e8;
  }
`;
