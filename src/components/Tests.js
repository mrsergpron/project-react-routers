import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Sorted from "./Sorted";
import info from "./info.js";

import classes from "./Tests.module.scss";

const Tests = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [testsInfo, setTestsInfo] = useState(info);

  console.log(location);
  console.log(query);

  const sortedTests = (event) => {
    const newInfo = [...info];
    newInfo.sort((a, b) =>
      a[event.target.value] > b[event.target.value] ? 1 : -1
    );
    setTestsInfo(newInfo);
  };

  return (
    <div className={classes.tests}>
      {info.length > 0 ? <Sorted sortedTests={sortedTests} /> : ""}
      <h1>Tests</h1>

      {testsInfo.map((test, index) => (
        <p key={index}>
          <Link to={test.slug}>{test.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default Tests;
