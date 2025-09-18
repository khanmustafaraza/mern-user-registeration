import React from "react";
import Adminlayout from "../../layout/Adminlayout";
import { useEffect, useState } from "react";

const User = () => {
  const [allUsers, setAllUsers] = useState([]);
  // const [isDelete, setIsDelete] = useState(false);

  const getAllUser = async () => {
    const res = await fetch("http://localhost:5000/api/users/get-all-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        // console.log(data.users);
        setAllUsers(data.users);
      }
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);
  const handleDelete = async (id) => {
    const a = confirm("Are you Want to delete this record");
    // console.log(a);

    if (!a) {
      return false;
    }
    const res = await fetch(
      `http://localhost:5000/api/users/delete-user/${id}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      const data = await res.json();
      alert(data.msg);
      // setIsDelete(!isDelete);
      getAllUser();
    }
  };
  return (
    <Adminlayout>
      <div className="container h-100">
        <h2 className="py-4">List Of Register Users</h2>
        <div className="row d-flex justify-content-center align-items-center overflow-x-scroll w-100">
          <table className="table table-striped border text-center ">
            <thead>
              <tr className="border-2 ">
                <th scope="col">#</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th>isAdmin</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((curEle, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{curEle.username}</td>
                    <td>{curEle.email}</td>
                    <td>{curEle.isAdmin ? "True" : "False"}</td>
                    <td>
                      <button className="px-4 py-1 rounded-1 text-white bg-success border-0 mx-2">
                        Edit
                      </button>
                      <button
                        className="px-4 py-1 rounded-1 text-white bg-danger border-0"
                        onClick={() => handleDelete(curEle._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Adminlayout>
  );
};

export default User;
