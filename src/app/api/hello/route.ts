import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log("Hello World!");

    return NextResponse.json({
      message: "Hello World!",
    });
  } catch (error) {
    console.log(error);
  }
}
