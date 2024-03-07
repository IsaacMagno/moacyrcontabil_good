"use client";

import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import LinkButton from "./LinkButton";
import Dropdown from "./Dropdown";
import { Attach } from "../svgs";
import { validateEmail } from "@/app/utils/validateEmail";

const ResumeForm = () => {
  const values = ["Trabalhista", "Fiscal", "Contábil", "Auxiliar"];
  const defaultData = {
    email: "",
    name: "",
    address: "",
    city: "",
    maritalStatus: "",
    age: "",
    numberChildren: "",
    phone: "",
    technicalFormation: "",
    higherEducation: "",
    practicesComment: "",
    role: "",
    about: "",
  };
  const [formData, setFormData] = useState(defaultData);
  const [error, setError] = useState({
    email: "",
    fields: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email") {
      const isValidEmail = validateEmail(value);
      setError((prevError) => ({
        ...prevError,
        email: isValidEmail ? "" : "Por favor, insira um e-mail válido.",
      }));
    }
  };

  const handleClick = () => {
    const requiredFields = [
      "name",
      "email",
      "address",
      "city",
      "maritalStatus",
      "age",
      "numberChildren",
      "phone",
      "technicalFormation",
      "higherEducation",
      "practicesComment",
      "role",
      "about",
    ];
    const isFormValid = requiredFields.every((field) => formData[field]);
    const isValidEmail = validateEmail(formData.email);

    if (!isFormValid || !isValidEmail) {
      setError({
        ...error,
        fields: "Por favor, preencha todos os campos corretamente.",
      });
      return;
    }

    console.log(formData);
    setFormData(defaultData);
    setError({ email: "", fields: "" });
  };

  return (
    <form className="flex flex-col gap-6 rounded-lg bg-[#323231] lmd:w-full">
      <section className="flex flex-col gap-2 items-start w-28">
        <p className="text-white">Currículo (formato.pdf)</p>
        <LinkButton name="Anexar" icon={<Attach />} hasBorder />
      </section>
      <section className="flex flex-col gap-6 w-[20.5rem] lg:w-[54rem] lmd:w-full">
        <p className="text-white mb-[-1rem]">Dados pessoais:</p>
        <small className="text-white mt-[-0.5rem]">(Todos campos são obrigatórios.)</small>
        <Input
          name="name"
          value={formData.name}
          type="text"
          placeholder="Nome"
          onChange={handleChange}
        />
        <Textarea
          name="address"
          value={formData.address}
          type="email"
          placeholder="Endereço"
          onChange={handleChange}
        />
        <div className="flex flex-col gap-6 w-[13rem] lg:flex-row lg:w-full">
          <Input
            name="city"
            value={formData.city}
            type="text"
            placeholder="Cidade"
            onChange={handleChange}
          />
          <Input
            name="maritalStatus"
            value={formData.maritalStatus}
            type="text"
            placeholder="Estado Civil"
            onChange={handleChange}
          />
          <Input
            name="age"
            value={formData.age}
            type="number"
            placeholder="Idade"
            onChange={handleChange}
          />
          <Input
            name="numberChildren"
            value={formData.numberChildren}
            type="number"
            placeholder="Número de Filhos"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <small className="text-red-400">{error.email}</small>
        </div>

        <div className="w-[13rem]">
          <Input
            name="phone"
            value={formData.phone}
            type="tel"
            placeholder="(xx) xxxx xxxx"
            onChange={handleChange}
          />
        </div>
      </section>
      <section className="flex flex-col gap-6 w-[20.5rem] lg:w-[54rem] lmd:w-full">
        <p className="text-white mb-[-1rem]">Informações técnicas:</p>
        <Textarea
          name="technicalFormation"
          value={formData.technicalFormation}
          type="text"
          placeholder="Formação Técnica"
          onChange={handleChange}
        />
        <Textarea
          name="higherEducation"
          value={formData.higherEducation}
          type="text"
          placeholder="Formação Superior"
          onChange={handleChange}
        />
        <Textarea
          name="practicesComment"
          value={formData.practicesComment}
          type="text"
          placeholder="Comentário de suas práticas"
          onChange={handleChange}
        />
        <div className="w-[13rem]">
          <Dropdown
            name={"role"}
            value={formData.role}
            type="email"
            placeholder="Cargo pretendido"
            values={values}
            onChange={handleChange}
          />
        </div>
        <Textarea
          name="about"
          value={formData.about}
          type="text"
          placeholder="Mais sobre o cargo pretendido"
          onChange={handleChange}
        />
      </section>
      <div className="flex flex-col gap-2">
        <div>
          <LinkButton
            name="Enviar informações"
            onClick={handleClick}
            hasBorder
          />
        </div>
        <small className="text-red-400">{error.fields}</small>
      </div>
    </form>
  );
};

export default ResumeForm;
