import React, { useState, useEffect } from 'react';

/**
 *  1：useState、useEffect都是reatc的Hook
 *  2: react的hook在组件渲染（初次和重新）时，会依次执行
 *  3：react的hook只能在function component中使用
 *  4：hook应该在函数的顶层使用 不能嵌套逻辑和判断 因为react是通过顺序匹配这次和上一次渲染的hook，并对应
 *    例如 count 被初始化为0 使用setCount() +1后 count忽略初始值 从state中取值 如果下次count和numhook交换
 *    name num将从state里面拿取count的值 count将拿去num的值形成bug
 *
 */

let ccc = 0;
export default function Child1() {
  // Declare a new state variable, which we'll call "count"

  if (ccc < 2) {
    var [count, setCount] = useState(100);
    var [num, setNum] = useState(0);
  } else {
    // eslint-disable-next-line no-redeclare
    var [num, setNum] = useState(0);
    // eslint-disable-next-line no-redeclare
    var [count, setCount] = useState(100);
  }
  ccc++;
  if (count > 2) {
    useEffect((a, b) => {
      console.log('useEffect1', a, b);
    });
  } else {
    useEffect((a, b) => {
      console.log('useEffect2', a, b);
    });
  }

  useEffect((a, b) => {
    console.log(22222222222);
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>{num}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}
