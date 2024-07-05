import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const MainUsers = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users, "heloo");

  return (
    <div>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default MainUsers;
// FirstName: "",
// LastName: "",
// Age: "",
// SocialNetwor: "",
// Email: "",
// City: "",
// Address: "",
