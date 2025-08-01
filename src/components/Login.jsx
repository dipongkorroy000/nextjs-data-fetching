"use client"
import React from 'react';
import { signIn } from "next-auth/react"


const Login = () => {
    return (
        <section>
            <button onClick={()=>signIn()} className='border px-3 py-1 rounded-lg cursor-pointer'>Login</button>
        </section>
    );
};

export default Login;
