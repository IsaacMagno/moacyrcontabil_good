/**
 * @param {string} props.placeholder - O texto do placeholder da textarea.
 * @param {string} props.value - O valor atual do conteúdo da textarea.
 * @param {function} props.onChange - A função a ser chamada quando o conteúdo da textarea é alterado.
 */

const Textarea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full p-2 rounded-lg lg:px-4 lg:py-3"
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
