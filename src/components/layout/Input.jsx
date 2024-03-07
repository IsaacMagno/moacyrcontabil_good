/**
 * @param {string} props.placeholder - O texto do placeholder.
 * @param {name} props.name - O nome do input.
 * @param {string} [props.type] - O tipo de input (por exemplo, 'text', 'password', 'email', etc.).
 * @param {string} [props.value] - O valor atual do input.
 * @param {string} [props.checked] - O valor atual do input com tipo checkbox.
 * @param {function} [props.onChange] - A função a ser chamada quando o valor do input é alterado.
 */

import React from "react";
import InputMask from "react-input-mask";

const Input = ({ placeholder, type, name, value, checked, onChange }) => {
  const mask = type === "tel" ? "(99) 9999 9999" : undefined;
  const maskChar = type === "tel" ? " " : undefined;

  return (
    <InputMask
      mask={mask}
      maskChar={maskChar}
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-2 rounded-lg"
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Input;
