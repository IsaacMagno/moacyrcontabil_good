"use client";

import { useState } from "react";
import LinkButton from "@/components/layout/LinkButton";
import Image from "next/image";
import BusinessPeople from "@/../../public/services/business-people-office.jpg";
import BusinessMan from "/public/services/business man.png";

import { budgetTexts, descText } from "@/helpers/budgetTexts";
import {
  CalculatorIcon,
  BalanceIcon,
  SheetIcon,
  CompanyIcon,
  CircleCheckIcon,
} from "@/components/svgs";
import GuideBar from "@/components/layout/GuideBar";
import Topic from "@/components/layout/Topic";
import { BarChartBig, ClipboardPlusIcon, LightbulbIcon } from "lucide-react";

const BudgetSection = () => {
  const guides = ["Contábil", "Fiscal", "Folha", "Societário"];
  const icons = [CalculatorIcon, BalanceIcon, SheetIcon, CompanyIcon];
  const [selectedGuide, setSelectedGuide] = useState(0);

  const getSelectedGuide = (index) => setSelectedGuide(index);

  return (
    <section className="flex flex-col items-center py-6 bg-[#E9E9E9] lg:gap-16 lmd:py-32 lmd:gap-32 xlg:pt-[11.5rem]">
      <GuideBar
        guides={guides}
        icons={icons}
        onClick={getSelectedGuide}
        selectedGuide={selectedGuide}
      />

      <section className="flex flex-col items-center gap-6 px-4 pt-6 lg:flex-row lg:py-0 lg:px-20 lg:gap-[8rem] my-5">
        <div className="relative w-full h-[30vh] lg:hidden">
          <Image
            src={BusinessMan}
            alt="Senhor sentado numa mesa de escritório"
            placeholder="blur"
            sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
            fill
          />
        </div>

        <div className="relative hidden lg:block lg:w-[40vw] lg:h-[90vh] lmd:w-[31rem]  xlg:w-[30vw] ">
          <Image
            src={BusinessPeople}
            alt="Senhor sentado numa mesa de escritório"
            placeholder="blur"
            sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
            fill
          />
        </div>
        <div className="flex flex-col gap-4">
          <article className="flex flex-col items-center gap-6 lg:items-start lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
            <h1>{budgetTexts[selectedGuide].title}</h1>
            <p>{budgetTexts[selectedGuide].text}</p>
          </article>
          <article className="flex flex-col w-[20.5rem] gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
            <section className="flex flex-col items-start gap-6">
              <Topic
                icon={<CircleCheckIcon />}
                title={descText[selectedGuide].title}
                text={descText[selectedGuide].text}
              />
              {selectedGuide === 0 && (
                <Topic
                  icon={<CircleCheckIcon />}
                  title={descText[4].title}
                  text={descText[4].text}
                />
              )}
            </section>
          </article>
          <div className="my-5 flex justify-center">
            <LinkButton
              href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
              target="_blank"
              name="Solicite um orçamento HOJE"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default BudgetSection;
