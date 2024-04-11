import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/App.scss";

//const createArray = (length: number) => [...Array(length)];

export default function StarRating() {
  //const [selectedStars, setSelectedStars] = useState(0);
  //const Star = ({ selected = false, onSelect = (f: any) => f }) => (
  //<FaStar color={selected ? "yellow" : "grey"} onClick={onSelect} />
  // );
  const rating = document.querySelectorAll(".rating");
  if (rating.length > 0) {
    initRatings();
  }

  return (
    <>
      <form action="#" className="form form_margin">
        <div className="rating">
          <div className="rating_body">
            <div className="rating_active"></div>
            <div className="rating_items">
              <input
                type="radio"
                className="rating_items"
                value={1}
                name="rating"
              ></input>
              <input
                type="radio"
                className="rating_items"
                value={2}
                name="rating"
              ></input>
              <input
                type="radio"
                className="rating_items"
                value={3}
                name="rating"
              ></input>
              <input
                type="radio"
                className="rating_items"
                value={4}
                name="rating"
              ></input>
              <input
                type="radio"
                className="rating_items"
                value={5}
                name="rating"
              ></input>
            </div>
          </div>
          <div className="rating_value">3.6</div>
        </div>
      </form>
    </>
  );
}
function initRatings() {
  throw new Error("Function not implemented.");
}
