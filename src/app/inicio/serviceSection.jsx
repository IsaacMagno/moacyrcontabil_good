import Image from "next/image";

const ServiceSection = () => {
  return (
    <section className="flex flex-col w-full px-4 py-6 items-center gap-6 bg-[#323231] lg:flex-row lg:justify-between lg:px-20 lg:py-16 lmd:py-32 xlg:px-32 xlg:py-[11.5rem] h-full">
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <h1 className="text-[#F6BE25]">Atendimento Digital ou Presencial</h1>
        <p className="text-white">
          Está com alguma dúvida sobre legislação? Conosco você tem{" "}
          <span className="text-white">GRATUITAMENTE</span> a vantagem de
          agendar uma visita presencial com um de nossos profissionais em sua
          empresa!
        </p>
        <h2 className="text-white">
          Nossos canais digitais estão diariamente disponíveis para ajudar você
          cliente.
        </h2>
      </article>
      <div className="relative w-[18.5rem] h-64 lmd:w-[28rem] lmd:h-[24.5rem] xlg:w-[43rem] xlg:h-[37rem]">
        <Image src={"/people on phone.png"} fill />
      </div>
    </section>
  );
};

export default ServiceSection;
