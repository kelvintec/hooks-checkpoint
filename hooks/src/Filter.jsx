import React from "react";
const Filter = ({ onTitleChange, onRatingChange }) => {
    return (
      <div className="filter">
        <input type="text" placeholder="Filter by Title" onChange={onTitleChange} />
        <input type="number" placeholder="Filter by Rating" onChange={onRatingChange} />
      </div>
    );
  };


export default Filter;