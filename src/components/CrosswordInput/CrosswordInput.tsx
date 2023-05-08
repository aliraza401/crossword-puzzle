import React from "react";
import { Col, Input, Row } from "antd";
import { CrosswordInputProps, InputField } from "./CrosswordInput.interface";
import {
  CrosswordContainer,
  AddButton,
  InputRow,
} from "./CrosswordInput.styled";

const CrosswordInput: React.FC<CrosswordInputProps> = ({
  direction,
  inputFields,
  onInputChange,
  onAddField,
}) => {
  return (
    <CrosswordContainer>
      <h4>{direction} Clues</h4>
      {inputFields.map((field, index) => (
        <InputRow key={index}>
          <Input
            type="text"
            name="clue"
            value={field.clue}
            onChange={(event) => onInputChange(index, event, direction)}
            placeholder="Clue"
            style={{ marginBottom: 5 }}
          />
          <Input
            type="text"
            name="answer"
            value={field.answer}
            onChange={(event) => onInputChange(index, event, direction)}
            placeholder="Answer"
            style={{ marginBottom: 5 }}
          />
          <Row>
            <Col span={12}>
              <Input
                type="number"
                name="row"
                value={field.row}
                onChange={(event) => onInputChange(index, event, direction)}
                placeholder="Row"
              />
            </Col>
            <Col span={12}>
              <Input
                type="number"
                name="col"
                value={field.col}
                onChange={(event) => onInputChange(index, event, direction)}
                placeholder="Col"
              />
            </Col>
          </Row>
        </InputRow>
      ))}
      <AddButton onClick={() => onAddField(direction)}>+</AddButton>
    </CrosswordContainer>
  );
};

export default CrosswordInput;
