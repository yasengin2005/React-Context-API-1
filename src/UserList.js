import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

import User from "./User";

const UserList = () => {
  const context = useContext(UserContext);

  return (
    <>
      <h2>User List</h2>
      {context.users.map((user) => (
        <User key={user.name} user={user} />
      ))}
    </>
  );
};

export default UserList;
