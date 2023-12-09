import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

connect();

export async function POST(req: NextRequest) {
  try {
    let reqBody = await req.json();
    console.log(reqBody);

    let { name, email, password } = reqBody;

    console.log(name);
    console.log(email);
    console.log(password);

    let user = await User.findOne({ email: email });

    if (user) {
      return NextResponse.json({
        message: "User already exists",
        success: false,
      });
    }
    let salt = bcrypt.genSaltSync(Number(process.env.SECRET));
    let hashPassword = bcrypt.hashSync(password, salt);
    let payload = {
      name: name,
      email: email,
      password: hashPassword,
    };

    console.log(hashPassword);

    let response = await User.create(payload);
    console.log(response);

    return NextResponse.json({
      message: "Successfully created a user",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
      success: false,
    });
  }
}
