/**
 * @param {string} props.title - O título do cartão.
 * @param {Array} props.list - A lista de itens a serem exibidos no cartão.
 */

import { Clipboard } from "../svgs";

const InfoCard = ({ title, list }) => {
  return (
    <section className="inline-flex items-end p-2 justify-center rounded-lg lg:h-[23rem] lg:px-4 lg:py-6 lg:rounded-[1.25rem] hover:bg-[#F6BE25] group">
      <article className="flex flex-col items-start gap-6">
        <h1 className="text-[#F6BE25] group-hover:text-[#323231]">{title}</h1>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </article>
      <div className="w-10 lg:w-20">
        <Clipboard />
      </div>
    </section>
  );
};

export default InfoCard;
