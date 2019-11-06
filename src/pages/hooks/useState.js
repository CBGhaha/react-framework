import React ,{useState} from 'react';
export default function  MyUseState(){
  const [times,setTimes]=useState(0);
  // 每次更新都是重新执行函数 有自己单独的作用域环境
  let logTimesAsync=()=>{
    setTimeout(()=>{
      console.log(times)
    },3000)
  }

  const updateTimesAsync=()=>{
    setTimeout(()=>{
      setTimes(times+1)
    },3000)
  }

  const updateTimesAsyncByFun=()=>{
    setTimeout(()=>{
      setTimes((times)=>times+1)
    },3000)
  }

  return(
    <div>
      <div>
        简单的useState
        <p>you has clicked {times}</p>
        <span onClick={()=>setTimes(times+1)}>click</span>
        <p>__________________________________________________________________________________________</p>
      </div>
      <div>
        函数式更新state
        <p>
          hooks触发的更新每次都是重新执行函数组件，所以每次执行都是自己独立的state,props,自己的作用域。
          如果你在本次更新时有异步获取state或根据当前state修改state的情况，而获取的state只是当前的state，
          在异步未完成过程中修改的state是不会影响你本次异步的state，因它们本质是两个作用域。
        </p>
        <button onClick={updateTimesAsyncByFun}>updateTimesAsyncByFun</button>
        <button onClick={updateTimesAsync}>updateTimesAsync</button>
        <p>__________________________________________________________________________________________</p>
      </div>
      <button onClick={logTimesAsync}>asyncLog</button>

    </div>
    )
}