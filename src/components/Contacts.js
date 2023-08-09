import { Link } from "react-router-dom";

import classes from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <h1>Contacts</h1>

      <Link to=".." relative="path">
        to Home
      </Link>
      <Link to="../tests" relative="path">
        to Tests
      </Link>
    </div>
  );
};

export default Contacts;
