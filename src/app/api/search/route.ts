import { NextResponse } from "next/server";
import data from "@/app/searchdata.json";

export async function GET() {

  return NextResponse.json(data);

}
