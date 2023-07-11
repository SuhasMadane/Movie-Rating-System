import React from "react";

const MiniNavBar = ({ filterItem, categoryList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {categoryList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MiniNavBar;
