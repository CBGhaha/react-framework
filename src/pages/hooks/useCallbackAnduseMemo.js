import React, { useState, useCallback, useMemo } from 'react';

export default function UseCallbackAnduseMemo() {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(0);
  const countMemo = useMemo(()=>{
    console.log('count is add');
    return 'aaa' + times;
  }, [count]);
  //useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。适合返回一个函数组件的场景
  return (
    <div>
      <h4>countMemo</h4>
      当deps数组中的依赖项改变后，执行useMemo中回调函数的代码，
      hooks用Object.is()判断依赖项前后是否一致。它是一种避免重复复杂密集型计算的手段，
      类似于vue的compulate属性,他与useEffect在时机上的区别是，useMemo会在渲染期间执行，
      所以不要在此期间执行副作用。
      <p>count:<span>{count}</span></p>
      <p>times:<span>{times}</span></p>
      <div>
        <button onClick={()=>setCount(count + 1)}>addCount</button>
        <button onClick={()=>setTimes(times + 1)}>addtime</button>
      </div>
      {countMemo}
    </div>
  );

}