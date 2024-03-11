import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="flex min-w-full min-h-screen lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row flex-grow items-center relative">
        <div className="min-h-screen flex flex-col justify-center gap-10  z-30">
          <span>
            <h1 className="font-bold">Expanda seus lucros</h1>
            <h1>com a orientação de um</h1>
            <h1 className="font-bold">contador comprometido</h1>
          </span>
          <div className="flex flex-col lg:flex-row gap-4">
            <Link
              href="/serviços"
              className="p-2 lg:p-3 bg-yellow-500 rounded-2xl hover:opacity-80"
            >
              <h3>Conheça nossas soluções</h3>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
              className="flex gap-2 items-center  hover:opacity-80"
            >
              <h3>Fale com um especialista</h3>
              <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="w-[15rem] h-[15rem] lg:w-[30rem] lg:h-[30rem] lmd:h-[40rem] lmd:w-[40rem] xlg:w-[50rem] xlg:h-[50rem] overflow-hidden absolute lg:right-[-50px] lmd:right-[-20px] top-5">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
          >
            <SwiperSlide className="bg-carousel-one bg-contain flex min-h-screen"></SwiperSlide>
            <SwiperSlide className="bg-carousel-two bg-contain flex min-h-screen"></SwiperSlide>
            <SwiperSlide className="bg-carousel-three bg-contain flex min-h-screen"></SwiperSlide>
            {/* <SwiperSlide className="bg-blue-500 flex min-h-screen"></SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
