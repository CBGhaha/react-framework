import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import myRouter from './router/router.jsx';
import styles from './global.less';
//在布置了webpack-dev-server热加载模块后
//index入口文件并不会在整个架构体系有变化时自动重新执行（会重新打包）
//比如console.log(a)这个语句 在启动后执行一次后 当我修改a.js后重新打包 但这句语句是不会重新执行的 除非刷新
//所以热模块替换（HMR）使用module.hot.accept监听变化 并触发变化后执行的操作（重新）
//AppContainer 是react基于webpack的HMR的loader 它使得热加载后一些之前编译的旧内容(某个已经渲染的dom，某个dom上的旧事件)获得更新
renderWithHotReload(myRouter());
if (module.hot) {
  module.hot.accept('./router/router.jsx', ()=>{
    const myRouter = require('./router/router.jsx').default;
    renderWithHotReload(myRouter());
  });
}
function renderWithHotReload(element) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <div>
          {element}
        </div>
      </Provider>
    </AppContainer>,
    document.getElementById('appContent')
  );
}
