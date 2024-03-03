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
