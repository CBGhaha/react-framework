import React,{useState,useCallback,useMemo} from 'react';

export default function UseCallbackAnduseMemo(){
  const [count,setCount]=useState(0);
  const [times,setTimes]=useState(0);
  const countMemo=useMemo(()=>{
    console.log('count is add');
    return 'aaa'+times
  },[count]);
  //useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
  return(
    <div>
      当deps数组中的依赖项改变后，执行useMemo中回调函数的代码，
      hooks用Object.is()判断依赖项前后是否一致
      <p>count:<span>{count}</span></p>
      <p>times:<span>{times}</span></p>
      <div>
        <button onClick={()=>setCount(count+1)}>addCount</button>
        <button onClick={()=>setTimes(times+1)}>addtime</button>
      </div>
      {countMemo}
    </div>
  )

}