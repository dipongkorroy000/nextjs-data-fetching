import React from "react";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <section className="flex flex-col justify-center my-10">
      <h1 className="text-center">This is register page</h1>
      <RegisterForm></RegisterForm>
    </section>
  );
};

export default RegisterPage;
