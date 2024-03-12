import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper/modules";
import LinkButton from "@/components/layout/LinkButton";

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
        className="w-[15rem] h-[15rem] overflow-hidden lg:w-[20rem] lg:h-[20rem] lmd:w-[35rem] lmd:h-[35rem] xlg:w-[45rem] xlg:h-[45rem]"
      >
        <SwiperSlide className="bg-carousel-one bg-contain flex"></SwiperSlide>
        <SwiperSlide className="bg-carousel-two bg-contain flex"></SwiperSlide>
        <SwiperSlide className="bg-carousel-three bg-contain flex"></SwiperSlide>
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
