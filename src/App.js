import Intro from "../src/components/intro/Intro";
import Map from "../src/components/map/Map.js";
import Campaigns from "../src/components/campaign/Campaigns";
import SwipeableViews from "react-swipeable-views";
import Pagination from "../src/components/pagination/Pagination";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const styles = {
    root: {
      position: "relative",
      display: "flex",
      height: "100vh",
    },
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#fff",
    },
  };

  return (
    <div style={styles.root}>
      <SwipeableViews
        index={index}
        onChangeIndex={(val) => {
          handleChangeIndex(val);
        }}
        enableMouseEvents
      >
        <Intro></Intro>
        <Map></Map>
        <Campaigns></Campaigns>
      </SwipeableViews>
      <Pagination
        dots={3}
        index={index}
        onChangeIndex={(val) => {
          handleChangeIndex(val);
        }}
      />
    </div>
  );
}

export default App;
