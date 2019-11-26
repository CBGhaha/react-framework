/*
  forwardRef 也不是hooks单独的api 是16.3新加入的api 用于父传子ref深层穿透
  父组件希望获取子组件的子组件ref 只能给子组件传递ref 然后子组件经过forwardRef包装
  将父组件的设置的ref指向自己的子组件
  
*/
import React from 'react';
function Child(props,ref){
  return(
    <div ref={ref}>child</div>
  )
}
const Mychild =React.forwardRef(Child)
export default Mychild;
