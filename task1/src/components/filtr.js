import React from "react";

const Filtr = ({ sum }) => {
  console.log(sum,"iojinmb");
  function Filter(icons) {
    if (icons[1] === "instagram") {
      console.log("სწორია");
      // return <div className="facebook"></div>;
    } else if (icons[1] === "facebook") {
      console.log("სწორია2");
    } else if (icons[1] === "linkedin") {
      console.log("სწორია3");
    } else {
      console.log("Error");
    }
  }
  Filter(sum);
};

export default Filtr;
