import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./index.css";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function AppBar() {
  const session = await getServerSession(authOptions);

  console.log(session);
  return (
    <div>
      <div className="nav">
        <div>
          <Typography
            style={{ cursor: "pointer" }}
            variant="h5"
            className="logo"
          >
            Courses_a
          </Typography>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          {session && (
            <>
              <div className="navLink">
                <div>
                  <Link
                    href={"/courses"}
                    style={{
                      textDecoration: "none",
                      color: "#ffffff",
                    }}
                  >
                    <Typography
                      style={{ cursor: "pointer" }}
                      variant="h6"
                      className="logo"
                    >
                      courses
                    </Typography>
                  </Link>
                </div>

                <div>
                  <Link
                    href={"/purchasedcourses"}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      style={{ cursor: "pointer" }}
                      variant="h6"
                      className="logo"
                    >
                      purchased_courses
                    </Typography>
                  </Link>
                </div>
              </div>

              <div>
                <Avatar alt="image" src={session.user?.image!} />
              </div>

              <div>
                <Link href="/api/auth/signout">
                  <Button
                    sx={{
                      width: 100,
                    }}
                    className="btn"
                    variant="contained"
                  >
                    log out
                  </Button>
                </Link>
              </div>
            </>
          )}

          {!session && (
            <>
              <div
                className="navLink"
                style={{
                  marginRight: "12px",
                }}
              >
                <Link
                  href={"/courses"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    style={{ cursor: "pointer" }}
                    variant="h6"
                    className="logo"
                  >
                    courses
                  </Typography>
                </Link>
              </div>
              <div>
                <Link href={"/login"}>
                  <Button
                    sx={{
                      width: 100,
                    }}
                    className="btn"
                    variant="contained"
                  >
                    log in
                  </Button>
                </Link>
              </div>
              <div>
                <Link href={"/signup"}>
                  <Button
                    sx={{
                      width: 100,
                    }}
                    className="btn"
                    variant="contained"
                  >
                    sign up
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppBar;
