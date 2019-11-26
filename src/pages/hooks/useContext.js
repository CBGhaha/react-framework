import React ,{useContext,useState} from 'react';
const Mycontext=React.createContext();
export default function MyuseContext(){
  const [count,setCount]=useState(0);
  return <Mycontext.Provider value={count}>
    <div>
      <h4>useContext</h4>
      <p>传统的Context,通过context.consumer调用</p>
      <Child/>
      <p>useContext</p>
      <UseContextChild/>
      <button onClick={()=>setCount(count+1)}>count add</button>
    </div>
  </Mycontext.Provider>
}
function Child(){
  return(
    <Mycontext.Consumer>
      {
        value=>(
          <div>{value}</div>
        )
      }
    </Mycontext.Consumer>
  )
}
function UseContextChild(){
  const value = useContext(Mycontext);
  return <div>
    {value}
  </div>
}