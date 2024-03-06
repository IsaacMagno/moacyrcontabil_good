import Input from "./Input";
import Textarea from "./Textarea";
import LinkButton from "./LinkButton";
import { Attach } from "../svgs";
import Dropdown from "./Dropdown";

const ResumeForm = () => {
  const values = ["Trabalhista", "Fiscal", "Contábil", "Auxiliar"];
  return (
    <form className="flex flex-col gap-6 rounded-lg bg-[#323231] lmd:w-full">
      <section className="flex flex-col gap-2 items-start w-28">
        <p className="text-white">Currículo (formato.pdf)</p>
        <LinkButton name="Anexar" icon={<Attach />} hasBorder />
      </section>
      <section className="flex flex-col gap-6 w-[20.5rem] lg:w-[54rem] lmd:w-full">
        <p className="text-white mb-[-1rem]">Dados pessoais:</p>
        <Input type="text" placeholder="Nome" />
        <Textarea type="email" placeholder="Endereço" />
        <div className="flex flex-col gap-6 w-[13rem] lg:flex-row lg:w-full">
          <Input type="text" placeholder="Cidade" />
          <Input type="email" placeholder="Estado Civil" />
          <Input type="text" placeholder="Idade" />
          <Input type="text" placeholder="Filhos" />
        </div>
        <Input type="email" placeholder="Email" />
        <div className="w-[13rem]">
          <Input type="text" placeholder="Telefone" />
        </div>
      </section>
      <section className="flex flex-col gap-6 w-[20.5rem] lg:w-[54rem] lmd:w-full">
        <p className="text-white mb-[-1rem]">Informações técnicas:</p>
        <Textarea type="text" placeholder="Formação Técnica" />
        <Textarea type="email" placeholder="Formação Superior" />
        <Textarea type="text" placeholder="Comentário de suas práticas" />
        <div className="w-[13rem]">
          <Dropdown
            type="email"
            placeholder="Cargo pretendido"
            values={values}
          />
        </div>
        <Textarea type="text" placeholder="Mais sobre o cargo pretendido" />
      </section>
      <div>
        <LinkButton name="Enviar informações" hasBorder />
      </div>
    </form>
  );
};

export default ResumeForm;
