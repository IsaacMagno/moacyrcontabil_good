import ContactForm from "@/components/layout/ContactForm";
import LinkButton from "@/components/layout/LinkButton";
import { WhatsappIcon } from "@/components/svgs";

const ContactSection = () => {
  return (
    <section className="flex flex-col w-full px-4 py-6 items-center gap-6 bg-[#E9E9E9] lg:flex-row lg:justify-between lg:px-20 lg:py-16 lg:gap-32 lmd:py-32 lmd:gap-20 xlg:px-32 xlg:py-[11.5rem] xlg:gap-[17rem]">
      <section className="flex flex-col gap-6 lg:items-start">
        <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
          <section>
            <strong>Não perca mais tempo!</strong>
            <h1>Entre em contato com a Moacyr Contabilidade</h1>
          </section>
          <p>
            Se você está procurando uma contabilidade de confiança para ajudá-lo
            a gerenciar suas finanças e tomar decisões estratégicas para o
            futuro do seu negócio, não perca mais tempo!
          </p>
        </article>
        <div className="flex justify-center">
          <LinkButton
            wppButton
            icon={<WhatsappIcon />}
            name="Contatar via WhatsApp"
          />
        </div>
      </section>
      <ContactForm buttonName="Contatar via e-mail" />
    </section>
  );
};

export default ContactSection;
