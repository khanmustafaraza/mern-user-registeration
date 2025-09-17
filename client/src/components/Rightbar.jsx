import React from "react";
import Topbar from "./Topbar";

const Rightbar = ({ children }) => {
  return (
    <div className="col-lg-10 col-md-10 col-sm-6 col-6">
      <Topbar />
      <div className="p-2">{children}</div>
    </div>
  );
};

export default Rightbar;
