"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  // console.log(pathname, pathname.includes("dashboard"));
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="navbar flex justify-center p-3">
          <ul className="flex gap-3 w-fit">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/products/add">Add Product</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Navbar;
