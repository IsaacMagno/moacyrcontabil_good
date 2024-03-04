/**
 * @param {string} props.placeholder - O texto do placeholder.
 * @param {string} [props.type] - O tipo de input (por exemplo, 'text', 'password', 'email', etc.).
 * @param {string} [props.value] - O valor atual do input.
 * @param {function} [props.onChange] - A função a ser chamada quando o valor do input é alterado.
 */

const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 rounded-lg lmd:px-4 lmd:py-3"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
