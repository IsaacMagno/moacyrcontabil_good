import { LocationIcon, PhoneIcon, ClockIcon } from "@/components/svgs";

const LocationSection = () => {
  const location =
    "https://www.google.com/maps/embed/v1/place?q=R.+Cezira+de+Queiroz,+474+-+Centro,+Pedreira+-+SP,+Brasil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";
  return (
    <section className="flex flex-col w-full px-4 py-6 items-start gap-6 bg-[#323231] lg:px-20 lg:py-16 lg:gap-6 lmd:py-32 lmd:gap-10 xlg:px-32 xlg:py-[11.5rem]">
      <section>
        <strong className="text-[#F6BE25]">
          Explore soluções contábeis personalizadas para o seu negócio!
        </strong>
        <h1 className="text-[#F6BE25]">Conheça nosso escritório!</h1>
      </section>

      <section className="flex flex-col gap-6 lg:flex-row items-center self-center lg:gap-32 xlg:gap-72">
        <section className="flex flex-col gap-4">
          <section className="flex items-center gap-2">
            <span className="w-5 lmd:w-8 text-white">
              <LocationIcon />
            </span>
            <div className="flex flex-col items-start">
              <div>
                <p className="text-white">
                  Rua Cezira de Queiroz, 474 - Centro
                </p>
                <p className="text-white">Pedreira - São Paulo</p>
                <p className="text-white">CEP 13920-000</p>
              </div>
            </div>
          </section>

          <p className="flex gap-2 text-white">
            <span className="w-5 lmd:w-8 text-white">
              <PhoneIcon />
            </span>
            (19) 3893 2236
          </p>

          <p className="flex gap-2 text-white">
            <span className="w-5 lmd:w-8 text-white">
              <ClockIcon />
            </span>
            Segunda à Sexta das 8:00 as 17:30
          </p>
        </section>
        <section className="w-[18.5rem] h-[16.5rem] lmd:w-[38rem] lmd:h-[33.5rem] xlg:w-[47rem] xlg:h-[41.5rem]">
          <iframe
            className="w-full h-full rounded-lg lmd:rounded-3xl"
            src={location}
          ></iframe>
        </section>
      </section>
    </section>
  );
};

export default LocationSection;
