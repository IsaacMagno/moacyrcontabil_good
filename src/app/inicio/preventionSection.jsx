import BlackMan from "@/../../public/jovem-afro.png";
import Image from "next/image";

const PreventionSection = () => {
  return (
    <section className="flex flex-col w-full items-center gap-6 lg:flex-row lg:justify-between xlg:px-[7rem]">
      <div className="relative w-[18.5rem] h-[18rem] lmd:w-[28rem] lmd:h-[28rem] xlg:w-[35rem] xlg:h-[35rem]">
        <Image
          src={BlackMan}
          alt="Homem negro apontando com o dedo"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
        />
      </div>
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <h1>Prevenção de risco empresarial</h1>
        <div className="flex flex-col gap-4">
          <p>
            Imagine estar um passo à frente dos problemas e dos riscos de
            fiscalização em sua empresa?!
          </p>
          <p>
            Isso também é parte de nossa entrega: nós não apenas verificamos
            periodicamente as informações da sua empresa, mas também mantemos
            uma guarda constante contra os riscos de fiscalização. Porque sua
            tranquilidade é o nosso foco!
          </p>
        </div>
      </article>
    </section>
  );
};

export default PreventionSection;
