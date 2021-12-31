import React from "react";
import ProtoTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './index.less';
let cx = classNames.bind(styles);

const Home = () => {
  return (
    <div>
      <h2 className={cx('home')}>
          当前是 Home 页面，可以选择跳转到 Setting 界面或 Component 界面
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
