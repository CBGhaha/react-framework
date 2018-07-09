export default function common(type){
  return function(state,action){
      action.type===type?return Object.assign({},state,action.payload):return state;
  }
}
