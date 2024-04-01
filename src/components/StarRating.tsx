import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length: number) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const Star = ({ selected = false, onSelect = (f: any) => f }) => (
    <FaStar color={selected ? "yellow" : "grey"} onClick={onSelect} />
  );
  return (
    <>
      {createArray(totalStars).map((totalStars, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
