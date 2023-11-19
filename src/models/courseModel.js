import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please enter the course title"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the course price"],
    },
    description: {
      type: String,
    },
    imageLink: {
      type: String,
      required: [true, "please enter the course image"],
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Course =
  mongoose.model.courses || mongoose.model("courses", courseSchema);

export default Course;
