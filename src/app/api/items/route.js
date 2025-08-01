import { collectionNames, dbConnect } from "@/library/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect(collectionNames.PRODUCTS).find().toArray();
  return Response.json({ data }); 
}

// not used
export async function POST(request) {
  const postedData = await request.json();

  const result = await dbConnect(collectionNames.PRODUCTS).insertOne({productName: postedData});

  revalidatePath("/products");

  return Response.json({result});
}
