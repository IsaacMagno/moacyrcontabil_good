import { validateEmail } from "./validateEmail";

export const handleClick = (
  formData,
  setFormData,
  setError,
  defaultData,
  emailType
) => {
  const requiredFields = Object.keys(defaultData);
  const isFormValid = requiredFields.every((field) => {
    if (field === "message") {
      return true;
    }
    const value = formData[field];
    return value !== undefined && value !== "";
  });
  const isValidEmail = validateEmail(formData.email);

  if (!isFormValid || !isValidEmail) {
    setError((prevError) => ({
      ...prevError,
      fields: "Por favor, preencha todos os campos corretamente.",
    }));
    return;
  }

  fetch("http://localhost:3000/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData,
      emailType,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });

  setFormData(defaultData);
  setError({ email: "", fields: "" });
};
