import Image from "next/image";

const DreamSection = () => {
  return (
    <section className="flex flex-col w-full pt-6 items-center gap-6 bg-[#323231] lg:flex-row lg:justify-between lg:pl-20 lg:pt-0 xlg:pl-32 h-full">
      <article className="flex flex-col w-[20.5rem] items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]  py-[8vh]">
        <section>
          <strong className="text-[#F6BE25]">
            Liberte-se da CLT e realize{" "}
          </strong>
          <h1 className="text-[#F6BE25]">o sonho de ser empresário.</h1>
        </section>
        <p className="text-white">
          O sonho de abrir uma empresa é um grande passo na vida de qualquer
          empreendedor. É a realização de um desejo de ser seu próprio chefe,
          ter autonomia e liberdade para fazer suas próprias escolhas, além de
          contribuir para a economia do país e gerar empregos.
        </p>
      </article>
      <div className="relative w-full h-full lg:w-[32rem] lg:h-[31rem] lmd:w-[45rem] lmd:h-[43rem] xlg:w-[60rem] xlg:h-[58rem]">
        <Image src={"/happy people.png"} fill />
      </div>
    </section>
  );
};

export default DreamSection;
