import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

// 使用 CSS Module 的方式引入 App.less
import styles from './App.less';

// Loading 提示
const loadingComponent = () => <span>Loading</span>;


// Home 组件
const Home = Loadable({
    loader: () => import('pages/home'),
    loading: loadingComponent
});

// NotFound 组件
const NotFound = Loadable({
    loader: () => import('pages/exception'),
    loading: loadingComponent
});

const Admin = Loadable({
  loader: () => import('pages/admin'),
  loading: loadingComponent
});

export default () => {
    return (
        <div className={ styles.app }>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/admin' component={ Admin } />
                <Route component={ NotFound } />
            </Switch>
        </div>
    );
};
