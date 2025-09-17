import React from "react";
import Adminlayout from "../../layout/Adminlayout";

const User = () => {
  return (
    <Adminlayout>
      <div className="container h-100">
        <h2 className="py-4">List Of Register Users</h2>
        <div className="row d-flex justify-content-center align-items-center overflow-x-scroll w-100">
          <table class="table table-striped border text-center ">
            <thead>
              <tr className="border-2 ">
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th>Handle</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button className="px-4 py-1 rounded-1 text-white bg-success border-0 mx-2">
                    Edit
                  </button>
                  <button className="px-4 py-1 rounded-1 text-white bg-danger border-0">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Adminlayout>
  );
};

export default User;
