"use server";
import { collectionNames, dbConnect } from "@/library/dbConnect";

// not used
export const getProducts = async () => {
  try {
    const data = await dbConnect(collectionNames.PRODUCTS).find().toArray();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
