import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const res = NextResponse.next();

    console.log(res.cookies);

    console.log("inside the me file");

    return NextResponse.json({
      cookies: request.cookies,
    });

    // console.log(response);

    // if (response) {
    //   return NextResponse.json({
    //     success: true,
    //   });
    // } else {
    //   return NextResponse.json({
    //     success: false,
    //   });
    // }
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500,
    });
  }
}
