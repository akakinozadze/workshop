import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const MainUsers = () => {
  const users = useSelector((state) => state.users.users);
  const members = useSelector((state) => state.members.members);
  return (
    <div className="Container">
      <div className="SocMediaIcon">
        {members.map((e) => {
          console.log(e);
          return <div key={e.key}>{e}</div>;
        })}
      </div>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default MainUsers;
