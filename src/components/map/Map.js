import React, { useEffect, useState } from "react";
import "./Map.css";
import floor1 from "../../assets/floor1.png";
import floor2 from "../../assets/floor2.png";
import floor3 from "../../assets/floor3.png";
import pin from "../../assets/pin.svg";
import Select from "react-select";

const Map = () => {
  const [floor, selectFloor] = useState(floor1);
  const [divSize, setSize] = useState({ height: 0, width: 0 });

  const [selectedOption, setSelectedOption] = useState(null);
  const [randomSize, setRandomSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const height = document.getElementById("map-overlay").clientHeight;
    const width = document.getElementById("map-overlay").clientWidth;
    setSize({
      height: height,
      width: width,
    });
  }, []);

  const generateMargin = () => {
    let width = Math.random() * divSize.width;
    let height = Math.random() * divSize.height;
    setRandomSize({ width: width - 30, height: height - 30 });
  };

  const brands = [
    { value: "ryanscustomjewelry", label: "ryanscustomjewelry", floor: 0 },
    { value: "joyeria", label: "joyeria", floor: 0 },
    { value: "journeys", label: "journeys", floor: 0 },
    { value: "petco", label: "petco", floor: 0 },
    { value: "lhmmegaplex", label: "lhmmegaplex", floor: 0 },
    { value: "radioshack", label: "radioshack", floor: 0 },
    { value: "childrensplace", label: "childrensplace", floor: 0 },
    { value: "trinketstreasures", label: "trinketstreasures", floor: 0 },
    { value: "passionnails", label: "passionnails", floor: 1 },
    { value: "wingers", label: "wingers", floor: 1 },
    { value: "ross", label: "ross", floor: 1 },
    { value: "rue11", label: "rue11", floor: 1 },
    { value: "mrscav", label: "mrscav", floor: 1 },
    { value: "xzone", label: "xzone", floor: 1 },
    { value: "morganjewelers", label: "morganjewelers", floor: 1 },
    { value: "sushimonster", label: "sushimonster", floor: 1 },
    { value: "tmobile", label: "tmobile", floor: 1 },
    { value: "nikkisbridal", label: "nikkisbridal", floor: 1 },
    { value: "purseplus", label: "purseplus", floor: 2 },
    { value: "jimmyjohns", label: "jimmyjohns", floor: 2 },
    { value: "silverloft", label: "silverloft", floor: 2 },
    { value: "olivegarden", label: "olivegarden", floor: 2 },
    { value: "popcorncottage", label: "popcorncottage", floor: 2 },
    { value: "fadsnfashions", label: "fadsnfashions", floor: 2 },
    { value: "xbrands", label: "xbrands", floor: 2 },
    { value: "accesoryshop", label: "accesoryshop", floor: 2 },
    { value: "schubachjewelers", label: "schubachjewelers", floor: 2 },
    { value: "sprint", label: "sprint", floor: 2 },
    { value: "movies9", label: "movies9", floor: 2 },
  ];

  const floors = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];

  const renderFloor = (floor) => {
    switch (floor) {
      case "0":
        selectFloor(floor1);
        break;
      case "1":
        selectFloor(floor2);
        break;
      case "2":
        selectFloor(floor3);
        break;
      default:
        selectFloor(floor1);
        break;
    }
  };

  return (
    <div className="map">
      <div className="map-header">
        <span className="map-title"> Here you can check out the map</span>
        <Select
          onChange={(val) => {
            renderFloor(val.value);
            setSelectedOption(null);
          }}
          isSearchable={false}
          placeholder="Pick a floor"
          className="map-search-button"
          options={floors}
        />
        <Select
          onChange={(val) => {
            renderFloor(val.floor.toString());
            generateMargin();
            setSelectedOption(val);
          }}
          placeholder="Search a brand..."
          className="map-search-button"
          options={brands}
        />
      </div>
      <div className="map-floor-image-wrapper">
        <img className="map-floor-image" src={floor}></img>
        <div id="map-overlay" className="map-image-overlay-pin">
          <img
            style={{
              display: selectedOption ? "flex" : "none",
              marginTop: randomSize.height,
              marginLeft: randomSize.width,
            }}
            className="map-pin-image"
            src={pin}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Map;
