import React,{useEffect} from "react";
import ProtoTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './index.less';
import SelectListBar from "../../components/selectListBar";

let cx = classNames.bind(styles);
const handleVideoInit = (url) => {
  if (window.Aliplayer) {
    new window.Aliplayer({
      "id": "player-con",
      "source": url,
      'height': '100vh',
      "autoplay": true,
      "isLive": true,
      "playsinline": true,
      "preload": true,
      "controlBarVisibility": "hover",
      "useH5Prism": true
    }, function (player) {
        console.log('player: ', player);
        console.log("The player is created");
      }
    );
  }
};

const Home = () => {
  // const url =  "";
  const url='123';
  useEffect(() => handleVideoInit(url), []);
  return (
    <div className={cx('home')}>
      <div className={cx('home-slider-bar')}>
        <SelectListBar></SelectListBar>
      </div>
      <h2 className={cx('home-player')}>
          <div className="prism-player" id="player-con"></div>
      </h2>
    </div>
  );
};

Home.propTypes = {
    history: ProtoTypes.shape({
        push: ProtoTypes.func.isRequired,
    }).isRequired,
};

export default Home;
