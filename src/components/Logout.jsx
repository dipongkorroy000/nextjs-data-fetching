"use client";
import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <section>
      <button onClick={() => signOut()} className="border px-2 py-1 rounded cursor-pointer">
        Logout
      </button>
    </section>
  );
};

export default Logout;
