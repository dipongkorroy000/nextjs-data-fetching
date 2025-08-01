"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

const RegisterForm = () => {
  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const payload = { name, email, password };

    const result = await registerUser(payload);

    console.log(result);
  };

  return (
    <div className="w-sm mx-auto p-5">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <input type="text" name="name" className="border rounded border-gray-600 p-2" placeholder="Enter Name"></input>

        <input
          type="email"
          name="email"
          className="border rounded border-gray-600 p-2"
          placeholder="Enter Email"
        ></input>

        <input
          type="password"
          name="password"
          className="border rounded border-gray-600 p-2"
          placeholder="Enter password"
        ></input>
        <button type="submit" className="px-3 py-1 border border-gray-600 cursor-pointer rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
