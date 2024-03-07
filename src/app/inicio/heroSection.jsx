import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex min-w-full min-h-screen  px-20">
      <div className="flex flex-grow  justify-evenly">
        <div className="min-h-screen flex flex-col justify-center gap-10 z-50">
          <span>
            <h1 className="font-bold">Expanda seus lucros</h1>
            <h1>com a orientação de um</h1>
            <h1 className="font-bold">contador comprometido</h1>
          </span>
          <div className="flex gap-4">
            <Link href="/" className="p-3 bg-yellow-500 rounded-2xl">
              Conheça nossas soluções
            </Link>
            <Link href="/" className="flex gap-2 items-center">
              Fale com um especialista <ArrowRight />
            </Link>
          </div>
        </div>
        {/* <div className="transform rotate-45 w-[50rem] h-[50rem] bg-yellow-500 overflow-hidden"> */}
        <div className="transform rotate-45 w-[50rem] h-[50rem] overflow-hidden">
          {/* <Image
          src={"/carrousel/slide1.jpeg"}
          fill
          className="transform -rotate-45  object-fill"
        /> */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="bg-red-500  flex min-h-screen">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="bg-yellow-500 flex min-h-screen">
              Slide 2
            </SwiperSlide>
            <SwiperSlide className="bg-pink-500 flex min-h-screen">
              Slide 3
            </SwiperSlide>
            <SwiperSlide className="bg-blue-500 flex min-h-screen">
              Slide 4
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
