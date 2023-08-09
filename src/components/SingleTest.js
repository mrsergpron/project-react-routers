import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import info from "./info.js";
import classes from "./SingleTest.module.scss";

const SingleTest = () => {
  const params = useParams();
  const navigate = useNavigate();
console.log(params)
  const test = info.find((elem) => elem.slug === params.slug);

  useEffect(() => {
    if (!test) {
      navigate("..", { relative: "path" });
    }
  }, [test, navigate]);

  return (
    <div className={classes.singleTest}>
      <h1>{test?.title}</h1>

      <Link to=".." relative="path">
        All Tests
      </Link>
      {/* {test ? (
        <Link to=".." relative="path">
          All Tests
        </Link>
      ) : (
        <NotFound />
      )} */}
    </div>
  );
};

export default SingleTest;
