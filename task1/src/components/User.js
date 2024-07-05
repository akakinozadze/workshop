import React from "react";
import "./user.css";
import Img from "./Img";
const User = ({ user }) => {
  return (
    <div className="MainBox">
      <div className="Img">
        {" "}
        <Img />
      </div>
      {/* <img className="UserImg" src={user.Img} alt="imgEroor"></img> */}
      <h2 className="users">
        {user.FirstName} - {user.LastName}
      </h2>

      <h2 className="users">Age-{user.Age}</h2>
      <h2 className="users">{user.SocialNetwor}</h2>
      <h2 className="users">
        {user.City} - {user.Address}
      </h2>
      <h2 className="users">{user.Email}</h2>
      <h2 className="users">{user.Gender}</h2>
    </div>
  );
};

export default User;
