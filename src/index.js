import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import MyRouter from './router/router.jsx';

//在布置了webpack-dev-server热加载模块后
//index入口文件并不会在整个架构体系有变化时自动重新执行（会重新打包）
//比如console.log(a)这个语句 在启动后执行一次后 当我修改a.js后重新打包 但这句语句是不会重新执行的 除非刷新
//所以热模块替换（HMR）使用module.hot.accept监听变化 并触发变化后执行的操作（重新）
renderWithHotReload(MyRouter());
if(module.hot){
  module.hot.accept('./router/router.jsx',()=>{
    const MyRouter=require('./router/router.jsx').default;
      renderWithHotReload(MyRouter());
  })
}
function renderWithHotReload(element){
  ReactDOM.render(
          <AppContainer>
  	        <div>
              {element}
  	         </div>
          </AppContainer>,
          document.getElementById('appContent')
      )
}
