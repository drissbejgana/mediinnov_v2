import { NextRequest, NextResponse } from "next/server"
import products from "@/products.json"



export const dynamic = 'force-dynamic'; 
export const revalidate = 0;

export async function GET(request:NextRequest,context:any) {
              
          const {params}=context

    return NextResponse.json(products)

}