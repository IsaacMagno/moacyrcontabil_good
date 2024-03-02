import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "/public/logo_gasparini.png";

import { AlarmClockCheck, Mail, MapPin, Phone } from "lucide-react";

const MobileFooter = () => {
  return (
    <div className="flex flex-col text-sm gap-4 pb-20">
      <div className="flex flex-col min-w-full items-center gap-2 border-b border-black pb-4 lg:flex-row lg:justify-between">
        <Image src={Logo} className="w-40" />
        <button className="bg-yellow-500 rounded-2xl p-2 font-semibold hover:opacity-80">
          Solicite um orçamento
        </button>
      </div>

      <div className="flex-col-gap-2 lg:grid lg:grid-cols-2 xl:grid-cols-4 xl:gap-20">
        <span className="flex-col-gap-2 ">
          <p className="font-semibold">Moacyr Contabilidade</p>
          <p className="">
            Almejamos impactar positivamente a vida dos nossos clientes,
            capacitando-os a contribuir significativamente para o progresso do
            Brasil.
          </p>
        </span>

        <span className="flex-col-gap-2 ">
          <p className="font-semibold">Navegação</p>
          <ul className="flex flex-col min-w-full">
            <Link href={"/"} className="">
              <li className="">Área do cliente</li>
            </Link>
            <Link href={"/"} className="">
              <li className="">Institucional</li>
            </Link>
            <Link href={"/"} className="">
              <li className="">Serviços</li>
            </Link>
            <Link href={"/"} className="">
              <li className="">Contato</li>
            </Link>
            <Link href={"/"} className="">
              <li className="">Sites</li>
            </Link>
            <Link href={"/"} className="">
              <li className="">Planilhas</li>
            </Link>
          </ul>
        </span>

        <span className="flex-col-gap-2">
          <p className="font-semibold">Especialidades</p>
          <div>
            <p className="">Prevenção de risco empresarial</p>
            <p className="">Planejamento e controle financeiro</p>
          </div>
        </span>

        <span className="">
          <p className="font-semibold">Como nos achar</p>
          <span className="footer-icons">
            <MapPin width={15} />
            <span>
              <p>Rua Cezira de Queiroz, 474 - Centro</p>
              <p>Pedreira - São Paulo</p>
              <p>CEP 13920-000</p>
            </span>
          </span>
          <span className="footer-icons">
            <AlarmClockCheck width={15} />
            <p>Segunda à Sexta das 8:00 as 17:30</p>
          </span>
          <span className="footer-icons">
            <Phone width={15} /> <p>(19) 3893 2236</p>
          </span>
          <span className="footer-icons">
            <Mail width={15} />
            <p>atendimento01@moacyrcontabil.com.br</p>
          </span>
        </span>
      </div>

      <p className="text-center">
        © 2024 Moacyr Gasparini. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default MobileFooter;
