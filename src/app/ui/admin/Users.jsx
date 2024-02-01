import React from "react";
import Delete from "../icons/Delete";

function Users() {
  const users = [
    {
      id: 1,
      user: "jhone",
      gmail: "jhone@gmail.com",
      admin: true,
    },
    {
      id: 2,
      user: "jhone",
      gmail: "jhone@gmail.com",
      admin: false,
    },
    {
      id: 3,
      user: "jhone",
      gmail: "jhone@gmail.com",
      admin: false,
    },
  ];

  return (
    <div className="text-white ">
      <div className="my-5 flex gap-5 items-center justify-between">
        <h1 className="text-xl font-semibold">Clients</h1>
      </div>
      <div className="flex flex-col gap-2 ">
        <table className="table-auto">
          <thead>
            <tr align="left" className="border-b-2 border-gray900 ">
              <th className="py-2">User</th>
              <th className="py-2">Gmail</th>
              <th className="py-2">admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((p, i) => (
              <tr key={i} className="border-b border-gray900 ">
                <td className="  py-3 "> {p.user}</td>
                <td className="  py-3 ">{p.gmail}</td>
                <td>{p.admin == true ? "Admin" : "User"}</td>
                <td className="flex gap-2 items-center justify-center   py-3 ">
                  <button>
                    <Delete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
