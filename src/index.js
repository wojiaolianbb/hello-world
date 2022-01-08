import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import { LocaleProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import App from './App';
// store
import leftSelectBarStore from './stores/leftSelectBarStore'

const store = {
    leftSelectBarStore
}

ReactDom.render(
    // 使用 Provider 将 globalModel 传递给包裹住的所有组件及子组件
    <Provider {...store}>
        <LocaleProvider locale={zh_CN}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LocaleProvider>
    </Provider>,
    document.querySelector('#root')
);