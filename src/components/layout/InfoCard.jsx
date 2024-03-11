/**
 * @param {string} props.title - O título do cartão.
 * @param {Array} props.list - A lista de itens a serem exibidos no cartão.
 */

import { Clipboard } from "../svgs";

const InfoCard = ({ serviceSectionText }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:items-center gap-5 py-5">
      {serviceSectionText.map((section) => {
        const key = Object.keys(section)[0];
        return (
          <section
            key={key}
            className="inline-flex items-center p-5 xlg:p-10 h-[45vh] w-[35vh] lg:h-[40vh] lg:w-[30vh] lmd:h-[50vh] lmd:w-[37.5vh] justify-center rounded-lg lg:px-4 lg:py-6 lg:rounded-[1.25rem] hover:bg-[#F6BE25] group relative cursor-pointer"
          >
            <article className="flex flex-col items-start gap-6 w-[50vh] h-[30vh]">
              <h1 className="text-[#F6BE25] group-hover:text-[#323231]">
                {key}
              </h1>
              <ul>
                {section[key].map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </article>
            <div className="w-10 lg:w-12 lmd:w-16 xlg:w-20 absolute bottom-5 right-5">
              <Clipboard />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default InfoCard;
