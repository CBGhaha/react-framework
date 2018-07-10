export default function common(type){
  return function(state={},action){
    return action.type===type?Object.assign({},state,{type:action.payload}):state;
  }
}
