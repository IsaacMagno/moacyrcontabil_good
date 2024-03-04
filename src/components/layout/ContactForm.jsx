/**
 * @param {boolean} props.hasMessage - Define se o formulário inclui um campo de mensagem.
 * @param {string} props.buttonName - O texto a ser exibido no botão de envio.
 */

import Input from "./Input";
import Textarea from "./Textarea";
import LinkButton from "./LinkButton";

const ContactForm = ({ hasMessage, buttonName }) => {
  return (
    <form className="flex flex-col p-6 gap-8 rounded-lg bg-[#323231] lmd:p-16 lmd:gap-10 lmd:rounded-3xl">
      <Input type="text" placeholder="Digite seu nome" />
      <Input type="email" placeholder="exemplo@exemplo.com.br" />
      <Input type="text" placeholder="(xx) xxxx xxxx" />
      {hasMessage ? (
        <div className="h-[4.5rem] lmd:h-[11rem]">
          <Textarea placeholder="Digite sua mensagem" />
        </div>
      ) : null}
      <div className="flex gap-2 items-center">
        <div>
          <Input type="checkbox" />
        </div>
        <small className="text-white">
          Aceito receber e-mails com ofertas e conteúdos. Prometemos não
          utilizar suas informações para spam, clique aqui e veja nossa Política
          de Dados
        </small>
      </div>
      <LinkButton name={buttonName} hasBorder />
    </form>
  );
};

export default ContactForm;
