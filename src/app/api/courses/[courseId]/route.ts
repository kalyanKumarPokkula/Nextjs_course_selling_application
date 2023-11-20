import { NextRequest, NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";
import Course from "@/models/courseModel";

connect();

export async function GET(req: NextRequest) {
  try {
    let { url } = req;
    let courseId = url.split("/").pop();
    let course = await Course.findById(courseId);
    return NextResponse.json({
      course: course,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}
