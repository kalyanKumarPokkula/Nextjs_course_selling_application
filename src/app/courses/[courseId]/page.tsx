"use client";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./page.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

function CourseViewer() {
  const { courseId } = useParams();

  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    async function getCourse() {
      console.log(courseId);

      try {
        let response = await axios.get(
          `http://localhost:3000/api/courses/${courseId}`
        );

        console.log(response.data.course);
        setCourse(response.data.course);
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  }, []);

  if (course) {
    return (
      <div>
        <Grid container>
          <Grid lg={8.2}>
            <DisplayContent
              title={course.title}
              description={course.description}
            />
            {/* <h1>Hello world</h1> */}
          </Grid>
          <Grid lg={3.8}>
            <CoursCard
              title={course.title}
              imageLink={course.imageLink}
              price={course.price}
              // id={courseId}
            />
            {/* <h1>Hello world</h1> */}
          </Grid>
        </Grid>
      </div>
    );
  } else {
    <div>SomeThing went wrong</div>;
  }
}

function DisplayContent(props: any) {
  return (
    <div
      style={{
        width: "100vw",
        height: "300px",
        backgroundColor: "#1C1D1F",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px",
      }}
      className="display-content"
    >
      <Grid container>
        <Grid lg={8.4}>
          <Typography variant="h4" className="title">
            {/* The Ultimate React Course 2023: React, Redux & More */}
            {props.title}
          </Typography>
          <Typography variant="h6" className="description">
            {/* Master modern React from beginner to advanced! Context API, React
            Query, Redux Toolkit, Tailwind, advanced patterns */}
            {props.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

function CoursCard(props: any) {
  var cardStyle = {
    width: "350px",
    height: "420px",
    marginTop: "70px",
  };
  return (
    <Card style={cardStyle}>
      <div className="course-img">
        <img src={props.imageLink} alt={props.price} />
      </div>
      <div className="course-content">
        <div>
          <Typography variant="h6" className="title">
            {/* The Ultimate React Course 2023: React, Redux & More */}
            {props.title}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" className="price">
            {/* $ 500 */}$ {props.price}
          </Typography>
        </div>
        <div>
          <Button
            className="btn"
            variant="contained"
            fullWidth={true}
            onClick={() => {
              console.log("update");
            }}
          >
            Update
          </Button>
          <Button
            className="btn"
            variant="contained"
            fullWidth={true}
            // onClick={() => onDeleteCourse(course)}
          >
            Remove
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CourseViewer;
