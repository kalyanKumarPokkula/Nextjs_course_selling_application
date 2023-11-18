"use client";

import React, { useState, useEffect } from "react";
import Course from "@/components/Course";
import axios from "axios";
import "./page.css";

const CourseList = () => {
  const [Courses, setCourses] = useState<any>([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [courseDeleted, setcoursesDeleted] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/admin/courses",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        setCourses([...response.data.courses]);
        console.log(response.data.courses.length);
        if (response.data.length == 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
      } catch (error) {
        console.log(error);
        setIsEmpty(true);
      }
    };

    getCourses();
  }, [courseDeleted]);

  // const deleteCourseHandler = async value => {
  //   try {
  //     const response = await axios.delete(
  //       `http://127.0.0.1:3000/admin/courses/${value.courseId}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     console.log(response);
  //     setcoursesDeleted(prev => true);

  //     // window.location = "/Courses";
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(value);
  //   setTimeout(() => {
  //     setcoursesDeleted(false);
  //   }, 0);
  // };

  const viewDetailsHandler = (value: any) => {
    console.log(value);
  };

  return (
    <div className="course-list">
      <div>
        <h1>Courses Page</h1>
      </div>
      {isEmpty && (
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h2>No courses found?</h2>
        </div>
      )}
      {Courses.length > 0 && (
        <div className="courses">
          {Courses.map((item: any) => {
            return (
              <Course
                course={item}
                // onDeleteCourse={deleteCourseHandler}
                // onViewDetails={viewDetailsHandler}
                key={item.courseId}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CourseList;
