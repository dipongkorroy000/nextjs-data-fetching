import React from "react";
import { format } from "date-fns";
import { redirect } from "next/navigation";
import { collectionNames, dbConnect } from "@/library/dbConnect";

// export const dynamic = "force-dynamic"; // This will force the page to be dynamic and not cached

const ProductsPage = async () => {
  const data = await dbConnect(collectionNames.PRODUCTS).find().toArray();

  // const res = await fetch(`http://localhost:3000/api/items`)

  // with cache: "no-store", the data will not be cached
  // const res = await fetch("http://localhost:3000/api/items", { cache: "force-cache" }, { cache: "no-store" }).then(
  //   (res) => res.json()
  // );

  // if (data.length > 3) {
  //   redirect("/");
  // }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-md">
            <p>{product.productName}</p>
            {product?.update_at && (
              <p className="text-xs text-gray-400 mt-4">
                Last updated: {format(new Date(product.update_at), "MMMM d, yyyy h:mm a")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
