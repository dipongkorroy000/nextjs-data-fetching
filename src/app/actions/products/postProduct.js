"use server";
import { collectionNames, dbConnect } from "@/library/dbConnect";

export async function postProduct(product) {
  try {
    const result = await dbConnect(collectionNames.PRODUCTS).insertOne(product);
    // console.log(result)
    return { success: true, insertedId: result.insertedId.toString() };
  } catch (error) {
    console.log(error);
    return null;
  }
}
