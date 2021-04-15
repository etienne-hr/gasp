import React, { useState, useEffect, useRef } from "react";
import { SquareList } from "./SquareList";

/**
 * Class for create a grid
 * */
class Grid {
  constructor(calc) {
    this.arrayGrid = [];
    this.calc = calc * calc;

    this.sqrt = this.setSqrt();

    this.setGrid();
  }

  setGrid() {
    for (let i = 0; i < this.calc; i++) {
      this.arrayGrid.push(i);
    }
  }

  setSqrt() {
    return Math.sqrt(this.calc);
  }
}

const numberCol = 8;
const grid = new Grid(numberCol);

/**
 * THE GASP
 * */

export const Gasp = (props) => {
  const [children, setChildren] = useState([]);
  const containerGrid = useRef(null);

  useEffect(() => {
    setChildren(containerGrid.current.children);
  }, []);

  const setDataId = (e) => {
    const id = e.target.getAttribute("data-id");
    setColorOnClick(id);
  };

  /**
   * Set color around the clicked element
   * */
  const setColorOnClick = (id) => {
    for (let i = 0; i < grid.calc; i++) {
      if (id % grid.sqrt === grid.sqrt - 1) {
        if (
          id == i + 1 || //+1
          id == i + numberCol || //+8
          id == i - numberCol || //-8
          id == i - numberCol + 1 || //-7
          id == i + numberCol + 1 // +9
        ) {
          if (children[i].style.background == "black") {
            children[i].style.background = "red";
          } else children[i].style.background = "black";
        }
      } else if (id % grid.sqrt == 0) {
        if (
          id == i - 1 || //-1
          id == i - numberCol || //-8
          id == i + numberCol || //+8
          id == i + numberCol - 1 || //+7
          id == i - numberCol - 1 // -9
        ) {
          if (children[i].style.background == "black") {
            children[i].style.background = "red";
          } else children[i].style.background = "black";
        }
      } else if (
        id == i + 1 || //+1
        id == i - 1 || //-1
        id == i - numberCol || //-8
        id == i + numberCol || //+8
        id == i - numberCol - 1 || //-9
        id == i + numberCol - 1 || //+7
        id == i - numberCol + 1 || //-7
        id == i + numberCol + 1 //+9
      ) {
        if (children[i].style.background == "black") {
          children[i].style.background = "red";
        } else children[i].style.background = "black";
      }
    }
  };

  return (
    <div
      ref={containerGrid}
      onClick={(e) => setDataId(e)}
      className="row"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: numberCol * 30 + "px",
        height: numberCol * 30 + "px",
      }}
    >
      {<SquareList grid={grid} />}
    </div>
  );
};
