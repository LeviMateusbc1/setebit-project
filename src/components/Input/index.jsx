import React from "react";
import * as Style from "./style";

// O componente de input
function Input({ label, type, value, onChange }) {
  return (
    <Style.InputWrapper>
      <Style.Label>{label}</Style.Label>
      <Style.InputField type={type} value={value} onChange={onChange} />
    </Style.InputWrapper>
  );
}

export default Input;
