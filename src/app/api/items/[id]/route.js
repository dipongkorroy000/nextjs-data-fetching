import { collectionNames, dbConnect } from "@/library/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const result = await dbConnect(collectionNames.PRODUCTS).findOne({ _id: new ObjectId(await params.id) });
  return Response.json(result);
}

// not used
export async function DELETE(req, { params }) {
  const result = await dbConnect(collectionNames.PRODUCTS).deleteOne({ _id: new ObjectId(await params.id) });
  return Response.json(result);
}


// not used
export async function PATCH(req, { params }) {
  const result = await dbConnect(collectionNames.PRODUCTS).updateOne(
    { _id: new ObjectId(await params.id) },
    { $set: { update_at: new Date() } }
  );

  return Response.json(result);
}
