import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./Course.css";

const Course = (props: any) => {
  var cardStyle = {
    width: "317px",
    height: "375px",
  };

  return (
    <div>
      <Card style={cardStyle} className="course-card" variant="outlined">
        <div className="course-img">
          <img src={props.course.imageLink} />
        </div>
        <div className="course-content">
          <div className="title">
            <h4>{props.course.title}</h4>
          </div>
          <div className="description">
            <p>{props.course.description.substr(0, 35)} ...</p>
          </div>
          <div className="price">
            <p>$ {props.course.price}</p>
          </div>
          <div>
            <Button
              className="btn"
              variant="contained"
              fullWidth={true}
              onClick={() => {
                props.onViewDetails(props.course._id);
              }}
            >
              View Details
            </Button>
            {/* <Button
              className="btn"
              variant="contained"
              fullWidth={true}
              onClick={() => onDeleteCourse(course)}
            >
              Remove
            </Button> */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Course;
