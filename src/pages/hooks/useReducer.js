import React ,{useReducer} from 'react';
const caseList=[
  'one',
  'tow',
  'three',
  'four'
];
function reducer(state,action){
  switch(action.type){
    case 'one':return 1;
    case 'tow':return 2;
    case 'three':return 3;
    case 'four':return 4;
    default:return 0
  }
}
export default function MyuseReducer(){
  const [count,dispatch]=useReducer(reducer,1);
  return (
    <div>
      <h4>useReducer</h4>
      <p>useReducer是useState的替代方案，但是useState其实也可以起到一样的效果。
        相比较useState,官网认为它在处理复杂结构的state和多层级传递修改state方法时更有利（useContext+dispatch）</p>
      <p>count is:{count}</p>
      {
        caseList.map((item,index)=><button onClick={()=>dispatch({type:item})} key={index.toString()}>click {item}</button>)
      }
      {/* <button>click "one"</button> */}
    </div>
  )
}