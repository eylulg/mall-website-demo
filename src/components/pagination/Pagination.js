import React from "react";
import PaginationDot from "./PaginationDot";

const Pagination = ({ index, dots, onChangeIndex }) => {
  const handleClick = (index) => {
    onChangeIndex(index);
  };

  const children = [];

  for (let i = 0; i < dots; i += 1) {
    children.push(
      <PaginationDot
        key={i}
        index={i}
        active={i === index}
        onClick={(index) => handleClick(index)}
      />
    );
  }

  return <div style={styles.root}>{children}</div>;
};
const styles = {
  root: {
    position: "absolute",
    bottom: 8,
    right: 8,
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    justifyContent: "center",
  },
};

export default Pagination;
