import { NextResponse, NextRequest } from "next/server";
import connect from "@/dbConfig/dbConfig";
import Course from "@/models/courseModel";

connect();

export async function GET(req: NextRequest) {
  try {
    let response = await Course.find({});
    return NextResponse.json({
      courses: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}
