import bcrypt from "bcrypt";
import User from "@/models/userModel";
import connect from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
  try {
    let reqBody = await req.json();
    let { email, password } = reqBody;

    // check whether user exist are not
    let user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        error: "user does not exist",
        status: 400,
        success: false,
      });
    }

    //check password is correct
    let validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return NextResponse.json({
        error: "Invalid password",
        status: 400,
        success: false,
      });
    }

    //create token data
    let tokenData = {
      id: user._id,
      email: user.email,
    };

    //creating token
    let token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1h",
    });

    let response = NextResponse.json({
      message: "Login Successfully",
      success: true,
      token: token,
    });

    // response.cookies.set("token", token, {
    //   httpOnly: true,
    // });

    // console.log(response.cookies);

    return response;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
