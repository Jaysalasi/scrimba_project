import React from "react";
import hero  from "../../img/fuji.png"

const List = (props) => {
  // console.log(props)
  return (
    <div className="list">
      <div className="left">
        <img src={hero} alt="hero" />
      </div>
      <div className="right">
        <div>
          <span className="location" >{props.data.location}</span>
          <span className="link">view on google</span>
        </div>
        <div>
          <h1> {props.data.title} </h1>
          <p> {props.data.date} </p>
          <span> {props.data.description} </span>
        </div>
      </div>
    </div>
  );
};
export default List;
