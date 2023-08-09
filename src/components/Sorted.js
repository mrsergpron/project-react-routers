import classes from "./Sorted.module.scss";

const Sorted = (props) => {
  return (
    <div className={classes.sorted}>
      <select defaultValue="" onChange={props.sortedTests}>
        <option value="" disabled>
          Сортировать по:
        </option>
        <option value="id">ID</option>
        <option value="title">TITLE</option>
        <option value="slug">SLUG</option>
      </select>
    </div>
  );
};

export default Sorted;
