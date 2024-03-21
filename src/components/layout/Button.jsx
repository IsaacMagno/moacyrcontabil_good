/**
 * @param {string} props.name - O texto do botão.
 * @param {boolean} [props.hasBorder] - Define se o botão tem borda.
 * @param {function} [props.onClick] - Define a função que será chamada ao clicar.
 */

const Button = ({ name, hasBorder, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        hasBorder ? "hover:border hover:border-[#F6BE25]" : null
      } inline-flex justify-center items-center bg-[#F6BE25] border border-transparent rounded-3xl py-2 px-4 gap-2 hover:bg-[#323231] cursor-pointer lmd:p-3 group`}
    >
      <h3 className="text-[#323231] group-hover:text-[#F6BE25]">{name}</h3>
    </button>
  );
};

export default Button;
