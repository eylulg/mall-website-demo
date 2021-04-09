import React from "react";

const styles = {
  root: {
    height: 40,
    width: 40,
    cursor: "pointer",
    border: 0,
    background: "none",
    padding: 0,
  },
  dot: {
    backgroundColor: "#e4e6e7",
    height: 30,
    width: 30,
    borderRadius: 30,
    margin: 3,
  },
  active: {
    backgroundColor: "#319fd6",
  },
};

const PaginationDot = ({ active, onClick, index }) => {
  const handleClick = () => {
    onClick(index);
  };

  let styleDot;

  if (active) {
    styleDot = Object.assign({}, styles.dot, styles.active);
  } else {
    styleDot = styles.dot;
  }

  return (
    <button type="button" style={styles.root} onClick={() => handleClick()}>
      <div style={styleDot} />
    </button>
  );
};

export default PaginationDot;
