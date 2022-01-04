import React,{useEffect} from "react";
import ProtoTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './index.less';

let cx = classNames.bind(styles);

const SelectListBar = () => {
  return (
    <div className={cx('select-list-bar')}>
     SelectListBar
    </div>
  );
};

SelectListBar.propTypes = {
    history: ProtoTypes.shape({
        push: ProtoTypes.func.isRequired,
    }).isRequired,
};

export default SelectListBar;
