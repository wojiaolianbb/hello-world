import React, { useEffect } from "react";
import ProtoTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './index.less';
import SelectListBar from "../../components/selectListBar";
import { observer, inject } from 'mobx-react';

let cx = classNames.bind(styles);
@inject('leftSelectBarStore')
@observer
class Home extends React.Component {
  static propTypes = {
    leftSelectBarStore: ProtoTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderVideo() {
    const { selectUrl } = this.props.leftSelectBarStore
    let DOM = ''
    if (selectUrl) {

      DOM = <div className="prism-player" id="player-con"></div>
    } else {
      DOM = <div id="player-con">123</div>
    }
    return DOM
  }

  render() {
    return (
      <div className={cx('home')}>
        <div className={cx('home-slider-bar')}>
          <SelectListBar></SelectListBar>
        </div>
        <h2 className={cx('home-player')}>
          {
            this.renderVideo()
          }
        </h2 >
      </div >
    );
  }
}

Home.propTypes = {
  history: ProtoTypes.shape({
    push: ProtoTypes.any.isRequired,
  }).isRequired,
};

export default Home;
