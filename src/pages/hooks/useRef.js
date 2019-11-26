import React,{useRef,useEffect,useState} from 'react';
import Mychild from './forwardRef.js';
export default function MyuseRef(){
  const [count,setCount]=useState(0)
  const ref=useRef();
  const ref1=useRef(1);
  const ref2=useRef(2);
  useEffect(()=>{
    console.log('ref:',ref);
    console.log(ref.current);
    console.log('ref1:',ref1);
    console.log('ref2:',ref2);
  })
  return (
  <div>
    <h4>useRef</h4>
    <p ref={ref}>1:useRef的正常用法：ref的current指向绑定的dom</p>
    <Mychild ref={ref1}/>
    <p>
      2:useRef的其他用法：useRef可以创建类似class组件的实例属性的功能。
      类似在组件内部创建变量，每次重新组件都不会新创建，修改ref的current也不会触发组件刷新，
      类似于class组件的 this.$mydata='',this.$interval
      <br/>
      Q：这和在函数中创建局部变量有什么区别？<br/>
      A：局部变量无法保存上次的状态，在组件更新时，函数重新执行，新的作用域，局部变量为初始化值<br/>
      Q：和在函数外全局作用域创建全局变量有什么区别？<br/>
      A：组件被多次调用时，每个实例都应该有自己单独的实例属性，不能公用属性。<br/>
    </p>
    <p>{count}</p>
    <button onClick={()=>{ref2.current=ref2.current+1}}>更新ref</button>
    <button onClick={()=>{setCount(count+1)}}>add count </button>
  </div>
  )
}