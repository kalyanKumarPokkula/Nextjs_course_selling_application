import Course from "@/components/CourseCard";
import axios from "axios";
import "./page.css";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function getCourses() {
  try {
    let response = await axios.get("http://localhost:3000/api/courses");
    return response.data.courses;
  } catch (error) {
    return [];
  }
}

export default async function CoursesList() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login?callbackUrl=/courses");
  }
  const Courses = await getCourses();

  return (
    <div>
      {Courses.length === 0 && (
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h2>No courses found?</h2>
        </div>
      )}
      {Courses.length > 0 && (
        <div className="courses">
          {Courses.map((item: any) => {
            return <Course course={item} key={item._id} />;
          })}
        </div>
      )}
    </div>
  );
}
