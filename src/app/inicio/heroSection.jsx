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
    <div className="flex min-w-full min-h-screen  px-20">
      <div className="flex flex-grow  items-center relative">
        <div className="min-h-screen flex flex-col justify-center gap-10 z-50">
          <span>
            <h1 className="font-bold">Expanda seus lucros</h1>
            <h1>com a orientação de um</h1>
            <h1 className="font-bold">contador comprometido</h1>
          </span>
          <div className="flex gap-4">
            <Link
              href="/"
              className="p-3 bg-yellow-500 rounded-2xl hover:opacity-80"
            >
              Conheça nossas soluções
            </Link>
            <Link
              href="/"
              className="flex gap-2 items-center  hover:opacity-80"
            >
              Fale com um especialista <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="w-[50rem] h-[50rem] overflow-hidden absolute right-[-20px] top-5">
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
