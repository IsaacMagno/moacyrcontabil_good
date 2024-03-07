import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="flex flex-col w-full px-4 py-6 items-center gap-6 bg-[#E9E9E9] lg:flex-row lg:justify-between lg:px-20 lg:py-16 lmd:py-32 xlg:px-[16rem] xlg:py-[11.5rem] h-full">
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <section>
          <strong>Conheça um pouco mais</strong>
          <h1>Sobre Nós</h1>
        </section>
        <p>
          Na Moacyr, acreditamos que o empreendedorismo é a chave para a
          prosperidade do país. É por isso que nosso objetivo é ajudar os
          pequenos e médios empreendedores a descomplicar e resolver seus
          problemas, fornecendo soluções eficazes e acessíveis. Não nos
          limitamos apenas a oferecer serviços, mas buscamos desenvolver uma
          mentalidade empreendedora em nossos clientes, contribuindo para o seu
          crescimento e sucesso.
        </p>
      </article>
      <div className="relative w-[18rem] h-[18rem] lmd:w-[31rem] lmd:h-[31rem]">
        <Image src={"/man with notebook.png"} alt="Homem segurando notebook" fill />
      </div>
    </section>
  );
};

export default AboutSection;
