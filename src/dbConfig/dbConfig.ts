import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    console.log("successfully connected");

    // const connection = mongoose.connection;

    // connection.on("connected", () => {
    //   console.log("Mongodb connected Successfully!");
    // });

    // connection.on("error", err => {
    //   console.log("Mongodb connection error" + err);
    //   process.exit();
    // });
  } catch (error) {
    console.log(error);
  }
}
