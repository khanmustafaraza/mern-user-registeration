import React from "react";
import Adminlayout from "../../layout/Adminlayout";
import { useState, useEffect } from "react";

const Contacts = () => {
  const [allContacts, setAllContacts] = useState([]);

  const getAllContact = async () => {
    const res = await fetch(
      "http://localhost:5000/api/contact/get-all-contact",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        console.log(data.contacts);
        setAllContacts(data.contacts);
      }
    }
  };
  useEffect(() => {
    getAllContact();
  }, []);
  return (
    <Adminlayout>
      <div className="container h-100">
        <h2 className="py-4">List Of Users who contact</h2>
        <div className="row d-flex justify-content-center align-items-center overflow-x-scroll w-100">
          <table className="table table-striped border text-center ">
            <thead>
              <tr className="border-2 ">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th>Message</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {allContacts?.map((curEle, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{curEle.name}</td>
                    <td>{curEle.email}</td>
                    <td>{curEle.message}</td>
                    {/* <td>
                      <button className="px-4 py-1 rounded-1 text-white bg-success border-0 mx-2">
                        Edit
                      </button>
                      <button
                        className="px-4 py-1 rounded-1 text-white bg-danger border-0"
                        onClick={() => handleDelete(curEle._id)}
                      >
                        Delete
                      </button>
                    </td> */}
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

export default Contacts;
