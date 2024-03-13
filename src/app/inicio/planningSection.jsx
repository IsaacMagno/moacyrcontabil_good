import Image from "next/image";
import PeopleOnCelphone from "@/../../public/planejamento_tributario.jpg";

const PlanningSection = () => {
  return (
    <section className="flex flex-col-reverse w-full px-4 py-6 items-center gap-6 lg:flex-row lg:justify-between lg:px-20 lg:py-16 lmd:py-32  xlg:px-32 h-full bg-[#E9E9E9]">
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <h1 className="">Planejamento Tributário</h1>
        <p className="">
          Você sabia que, a qualquer momento, a falta de atenção aos detalhes
          legais pode virar uma pedra no caminho do seu negócio?
        </p>
        <h2 className="">
          Nossa equipe monitora periodicamente todas as Certidões Negativas –
          CND de sua empresa, para que você não tenha surpresas desagradáveis.
        </h2>
        <h2>
          Monitoramos GRATUITAMENTE as CNDs da Receita Federal, do INSS, do
          FGTS, do ICMS, Municipal, e do CPF dos sócios.
        </h2>
        <h2>E esse é mais um benefício já incluso em sua mensalidade!</h2>
      </article>
      <div className="relative w-[18.5rem] h-[18rem] lmd:w-[28rem] lmd:h-[28rem] xlg:w-[35rem] xlg:h-[35rem]">
        <Image
          src={PeopleOnCelphone}
          alt="Pessoas no celular"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
          className=" rounded-full"
        />
      </div>
    </section>
  );
};

export default PlanningSection;
