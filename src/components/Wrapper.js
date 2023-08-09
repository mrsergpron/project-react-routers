import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const Wrapper = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Wrapper;
