/**
 * @param {string} props.name - O texto do botão.
 * @param {string} props.href - O URL para o qual o botão direciona.
 * @param {string} [props.icon] - O ícone opcional para ser exibido ao lado do texto do botão.
 * @param {boolean} [props.wppButton] - Define se o botão é específico para WhatsApp.
 */

const LinkButton = ({ name, href, icon, wppButton }) => {
  return (
    <a
      href={href}
      className={`${
        !wppButton
          ? "bg-[#F6BE25] hover:text-[#F6BE25]"
          : "bg-[#24B600] hover:text-[#24B600] flex-row-reverse"
      } inline-flex justify-center items-center rounded-3xl py-2 px-4 gap-2 hover:bg-[#323231] cursor-pointer lg:p-4`}
    >
      {name}
      {icon ? <div className="w-4 lg:w-6">{icon}</div> : null}
    </a>
  );
};

export default LinkButton;
