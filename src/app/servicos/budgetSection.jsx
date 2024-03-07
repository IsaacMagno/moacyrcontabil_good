"use client";

import { useState } from "react";
import LinkButton from "@/components/layout/LinkButton";
import Image from "next/image";
import { budgetTexts } from "@/helpers/budgetTexts";
import {
  CalculatorIcon,
  BalanceIcon,
  SheetIcon,
  CompanyIcon,
} from "@/components/svgs";
import GuideBar from "@/components/layout/GuideBar";

const BudgetSection = () => {
  const guides = ["Contábil", "Fiscal", "Folha", "Societário"];
  const icons = [CalculatorIcon, BalanceIcon, SheetIcon, CompanyIcon];
  const [selectedGuide, setSelectedGuide] = useState(0);

  const getSelectedGuide = (index) => setSelectedGuide(index);

  return (
    <section className="flex flex-col items-center py-6 bg-[#E9E9E9] lg:gap-16 lmd:py-32 lmd:gap-32 xlg:py-[11.5rem]">
      <GuideBar
        guides={guides}
        icons={icons}
        onClick={getSelectedGuide}
        selectedGuide={selectedGuide}
      />
      <section className="flex flex-col items-center gap-6 px-4 pt-6 lg:flex-row lg:py-0 lg:px-20 lg:gap-[8rem]">
        <div className="relative w-[18.5rem] h-[12rem] rounded-lg lg:w-[23rem] lg:h-[14.5rem] lmd:w-[31rem] lmd:h-[19.5rem] xlg:w-[44rem] xlg:h-[28rem]">
          <Image src={"/business man.png"} alt="Senhor sentado numa mesa de escritório" fill />
        </div>
        <article className="flex flex-col items-center gap-6 lg:items-start lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
          <h1>{budgetTexts[selectedGuide].title}</h1>
          <p>{budgetTexts[selectedGuide].text}</p>
          <LinkButton name="Solicite um orçamento HOJE" />
        </article>
      </section>
    </section>
  );
};

export default BudgetSection;
