import React from "react";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";

const Adminlayout = ({ children }) => {
  return (
    <div className=" row">
      <Sidebar />
      <Rightbar>{children}</Rightbar>
    </div>
  );
};

export default Adminlayout;
