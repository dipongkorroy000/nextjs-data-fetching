"use server";

import { collectionNames, dbConnect } from "@/library/dbConnect";

export const registerUser = async (payload) => {
  try {
    const result = await dbConnect(collectionNames.USERS).insertOne(payload);
    return { acknowledge: true, insertedId: result.insertedId.toString() };
  } catch (error) {
    console.log(error);
    return null;
  }
};
