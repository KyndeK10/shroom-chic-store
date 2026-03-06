import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const productsData = fs.readFileSync(
      path.resolve(process.cwd(), "public/products.json"),
      "utf8"
    );
    return NextResponse.json(JSON.parse(productsData));
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load products" },
      { status: 500 }
    );
  }
}
