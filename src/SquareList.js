import React, { useState, useEffect } from "react";

const Rows = (props) => {
  const { id } = props;

  return (
    <div
      data-id={id}
      style={{
        width: 30 + "px",
        height: 30 + "px",
        background: "red",
        border: "2px solid black",
      }}
    ></div>
  );
};

export const SquareList = (props) => {
  const { grid } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(grid.arrayGrid);
  }, [grid.arrayGrid]);

  return list.map((value, index) => <Rows key={index} id={index} />);
};
