import Image from "next/image";
import PeopleOnCelphone from "@/../../public/services/business-people-office.jpg";
import BusinessMan from "/public/services/business man.png";

const ControlSection = () => {
  return (
    <section className="flex flex-col w-full px-4 py-6 items-center gap-6 lg:flex-row lg:justify-between lg:px-20 lg:py-16 lmd:py-32  xlg:px-32 h-full bg-[#E9E9E9]">
      {/* <div className="relative w-[18.5rem] h-[18rem] lmd:w-[28rem] lmd:h-[28rem] xlg:w-[35rem] xlg:h-[35rem]">
        <Image
          src={PeopleOnCelphone}
          alt="Pessoas no celular"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
        />
      </div> */}

      <div className="relative w-full h-[30vh] lg:hidden">
        <Image
          src={BusinessMan}
          alt="Senhor sentado numa mesa de escritório"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
        />
      </div>

      <div className="relative hidden lg:block lg:w-[45vw] lmd:w-[45vw] xlg:w-[45vw] lg:h-[110vh] lmd:h-[140vh]">
        <Image
          src={PeopleOnCelphone}
          alt="Senhor sentado numa mesa de escritório"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
          className="rounded"
        />
      </div>
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <h1 className="lg:text-3xl lmd:text-5xl">
          Planejamento e Controle Financeiro
        </h1>
        <p className="">
          No competitivo mundo dos negócios, o sucesso de sua empresa está
          diretamente ligado à eficácia de um bom planejamento financeiro.
        </p>
        <h2>Como está a saúde financeira de sua empresa hoje?</h2>
        <h2>
          Você até possui o controle das contas, mas sabe como fazer um
          planejamento financeiro?
        </h2>
        <ul className="flex flex-col gap-4">
          <li>
            <span>1. Fluxo de Caixa Estratégico:</span>
            <p>
              Evite a necessidade de empréstimos com nosso planejamento do Fluxo
              de Caixa. O planejamento estabelece medidas que irão fortalecer o
              seu Fluxo de Caixa ao longo do ano, evitando surpresas. Nossa
              abordagem proativa ajuda a manter seu negócio sólido e resistente.
            </p>
          </li>
          <li>
            <span>2. Acompanhamento Detalhado das Despesas:</span>
            <p>
              A análise minuciosa das despesas é a chave para evitar surpresas
              desagradáveis e buscar a redução de custos. Identificamos os
              maiores aumentos ocorridos, e também o que precisa ser reduzido
              para garantir a saúde financeira de sua empresa.
            </p>
          </li>
          <li>
            <span>3. Gestão de Contas a Pagar e a Receber:</span>
            <p>
              O volume dessas contas pode ser a diferença entre o sucesso e o
              fracasso. Trabalhamos para buscar o equilíbrio dessas contas,
              ajudando a manter seu negócio longe de situações que possam
              prejudicar sua estabilidade financeira.
            </p>
          </li>
          <li>
            <span>4. Apuração da Margem de Lucro:</span>
            <p>
              A Margem de Lucro não é apenas um número, é a medida real do
              sucesso da sua empresa. Nossa expertise em apurar essa métrica
              crítica ajudará a impulsionar seus resultados financeiros e a
              definir metas realistas para o crescimento.
            </p>
          </li>
          <li>
            <span>5. Aperfeiçoamento do Controle das Contas:</span>
            <p>
              Preparamos sua equipe para o correto controle e organização das
              contas. Isso não apenas otimiza o processo, mas também cria uma
              base sólida para o crescimento sustentável, além de inibir fraudes
              e desvios financeiros, protegendo o que é seu.
            </p>
          </li>
        </ul>
        <h2>
          Invista no seu futuro financeiro com nosso serviço de Planejamento e
          Controle Financeiro e dê um passo à frente na realização dos seus
          objetivos empresariais!
        </h2>
      </article>
    </section>
  );
};

export default ControlSection;
