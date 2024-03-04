/**
 * @param {string} props.placeholder - O texto do placeholder do dropdown.
 * @param {Array} props.values - Os valores das opções do dropdown.
 * @param {string} props.value - O valor selecionado atualmente no dropdown.
 * @param {function} props.onChange - A função a ser chamada quando a opção selecionada é alterada.
 */

const Dropdown = ({ placeholder, values, value, onChange }) => {
  return (
    <select className="w-full p-2 rounded-lg lg:px-4 lg:py-3" value={value} onChange={onChange}>
      <option disabled selected>
        {placeholder}
      </option>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
