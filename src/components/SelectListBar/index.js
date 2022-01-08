import React, { useEffect } from "react";
import ProtoTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './index.less';
import { mapList } from '../../const/urlList'
import { observer, inject } from 'mobx-react';

let cx = classNames.bind(styles);
@inject('leftSelectBarStore')
@observer
class SelectListBar extends React.Component {
  static propTypes = {
    leftSelectBarStore: ProtoTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnItemClick(url) {
    const { changeVideoUrl } = this.props.leftSelectBarStore
    changeVideoUrl(url)
  }
  render() {
    return (
      <div className={cx('select-list-bar')}>
        {
          mapList.map(item => {
            return <div key={item.url}  className={cx('select-item')} onClick={() => this.handleOnItemClick(item.url)}>{item.title}</div>
          })
        }
      </div>
    );
  }
}

SelectListBar.propTypes = {
  history: ProtoTypes.shape({
    push: ProtoTypes.func.isRequired,
  }).isRequired,
};

export default SelectListBar;
