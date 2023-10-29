import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    let reqBody = await req.json();
    let { name, email, password } = reqBody;
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
      success: false,
    });
  }
}
