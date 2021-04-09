import "./Intro.css";
import mall from "../../assets/mall.jpg";
import settings from "../../assets/settings.svg";
import SettingsModal from "../settings/SettingsModal";
import { useState } from "react";

const Intro = () => {
  const [modalVisible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  return [
    <div className="intro">
      <img
        onClick={() => {
          openModal();
        }}
        className="intro-settings-button"
        src={settings}
      ></img>
      <div className="intro-container">
        <div className="intro-left">
          <span className="intro-big-title">
            Welcome To A Brand New Kiosk Experience
          </span>

          <span className="intro-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consectetur viverra metus. Pellentesque ac pretium elit, quis
            sagittis ante. Curabitur suscipit elementum luctus. Curabitur varius
            metus at laoreet lacinia. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis ullamcorper vulputate ligula sed condimentum.
            Phasellus sed finibus risus. Vivamus eu consectetur mauris.
            Pellentesque mollis risus et ultrices condimentum. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </span>
        </div>
        <div className="intro-right">
          <img className="intro-mall-image" src={mall} />
        </div>
      </div>
    </div>,
    <SettingsModal
      closed={() => {
        setVisible(false);
      }}
      visible={modalVisible}
    ></SettingsModal>,
  ];
};

export default Intro;
