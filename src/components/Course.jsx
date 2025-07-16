import React from "react";

function Course({ id, content, title, price, deleteCourse }) {
  const handleDelete = () => {
    deleteCourse(id);
  };
  return (
    <div className="course">
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{price} $</p>
      <div className="buttons">
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
        {/* <button className="edit">Edit</button> */}
      </div>
    </div>
  );
}

export default Course;
