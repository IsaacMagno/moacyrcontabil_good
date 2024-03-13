"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper/modules";
import LinkButton from "@/components/layout/LinkButton";
import Image from "next/image";

import PDF from "/public/carousel/pdf.jpg";
import PDF2 from "/public/carousel/pdf2.jpg";
import PDF3 from "/public/carousel/pdf3.jpg";
import PDF4 from "/public/carousel/pdf4.jpg";
import PDF5 from "/public/carousel/pdf5.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-6 lg:flex-row-reverse lg:justify-between">
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          // className="w-[30rem] h-[160vh] overflow-hidden lg:w-[42rem] lg:h-[155vh] lmd:w-[42rem] lmd:h-[130vh] xlg:w-[42rem] xlg:h-[110vh]"
          className="w-[20rem] h-[30rem] lmd:w-[30rem] lmd:h-[40rem] xlg:w-[40rem] xlg:h-[55rem]"
        >
          {/* <SwiperSlide className="bg-carousel-one flex rounded"></SwiperSlide>
          <SwiperSlide className="bg-carousel-two flex rounded"></SwiperSlide>
          <SwiperSlide className="bg-carousel-three flex rounded"></SwiperSlide>
          <SwiperSlide className="bg-carousel-four flex rounded"></SwiperSlide>
          <SwiperSlide className="bg-carousel-five flex rounded"></SwiperSlide> */}
          <SwiperSlide className="">
            <div className="relative w-full h-full ">
              <Image src={PDF} fill className="rounded" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative w-full h-full ">
              <Image src={PDF2} fill className="rounded" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative w-full h-full ">
              <Image src={PDF3} fill className="rounded" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative w-full h-full ">
              <Image src={PDF4} fill className="rounded" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative w-full h-full ">
              <Image src={PDF5} fill className="rounded" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section className="flex flex-col items-center justify-center gap-6 lg:items-start">
        <span className="flex flex-col">
          <mark>Expanda seus lucros</mark>
          <strong>com a orientação de um</strong>
          <mark>contador comprometido</mark>
        </span>
        <div className="flex flex-col items-center justify-center gap-6 lmd:flex-row">
          <LinkButton href="/servicos" name="Conheça as nossas soluções" />
          <Link
            href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
            target="_blank"
            className="flex gap-2 items-center  hover:opacity-80"
          >
            <h3>Fale com um especialista</h3>
            <ArrowRight />
          </Link>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
