"use client";
import { postProduct } from "@/app/actions/products/postProduct";
import { useRouter } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic"; // This will force the page to be dynamic and not cached

const ProductAddForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productName = e.target.productName.value;
    const product = { productName: productName };

    // await fetch(`/api/items`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({productName}),
    // });

    const result = await postProduct(product);
    console.log("result", result);
    

    e.target.reset();
    // alert("Product added successfully!");
    router.push("/products"); // Navigate to the products page
    router.refresh(); // Refresh the page to see the new product
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          className="border p-1 border-gray-600 rounded"
          type="text"
          name="productName"
          placeholder="Product Name"
        />
        <button className="border border-gray-500 px-3 py-1 rounded-xl cursor-pointer" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
