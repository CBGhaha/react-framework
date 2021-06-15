import React, { useEffect, useState } from 'react';

export default function MyuseEffect() {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(0);
  useEffect(()=>{
    console.log(`count:你点击了${count}次！`);
    return ()=>{
      console.log('组件销毁时和重新执行时执行-count');
    };
  });
  useEffect(()=>{
    console.log(`time:你点击了${times}次！`);
    return ()=>{
      console.log('组件销毁时和重新执行时执行-time');
    };
  }, [times]);
  return (
    <div>
      <h4>useEffect</h4>
      <p>useEffect相当于componentDidMout、componentDidUpdate、componentWillUnmout的结合</p>
      <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>add count</button>
      </div>
      <p>_________________________________________________________________________</p>
      <div>
        <p>如果给useEffect传入第二个参数数组依赖项，则只当依赖项修改后才执行useEffect中的回调函数</p>
        <p>{times}</p>
        <button onClick={()=>setTimes(times + 1)}>add times</button>
      </div>
    </div>
  );
}