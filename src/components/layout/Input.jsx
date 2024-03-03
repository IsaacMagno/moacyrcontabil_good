/**
 * @param {string} props.placeholder - O texto do placeholder.
 * @param {string} props.type - O tipo de input ('textarea', 'dropdown' ou 'text').
 * @param {Array} [props.options] - As opções para um dropdown (apenas necessário se o tipo for 'dropdown').
 */

const Input = ({ placeholder, type, options }) => {
  const inputType = () => {
    if (type === "textarea") {
      return (
        <textarea
          placeholder={placeholder}
          className="p-2 rounded-lg lg:px-4 lg:py-3"
        ></textarea>
      );
    } else if (type === "dropdown") {
      return (
        <select className="p-2 rounded-lg lg:px-4 lg:py-3">
          <option disabled selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type="text"
        placeholder={placeholder}
        className="p-2 rounded-lg lg:px-4 lg:py-3"
      ></input>
    );
  };
  return inputType();
};

export default Input;
