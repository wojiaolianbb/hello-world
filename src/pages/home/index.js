import React,{useEffect} from "react";
import ProtoTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './index.less';

let cx = classNames.bind(styles);
const handleVideoInit = (url) => {
  new window.Aliplayer({
    "id": "player-con",
    "source": url,
    "width": "1200px",
    'height': '100vh',
    "autoplay": true,
    "isLive": true,
    "rePlay": false,
    "playsinline": true,
    "preload": true,
    "controlBarVisibility": "hover",
    "useH5Prism": true
  }, function (player) {
      console.log("The player is created");
    }
  );
};

const Home = () => {
  const url =  "http://1011.hlsplay.aodianyun.com/demo/game.flv";
  useEffect(() => handleVideoInit(url), []);
  return (
    <div>
      <h2 className={cx('home')}>
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
