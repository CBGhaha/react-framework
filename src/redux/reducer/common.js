export default function common(type, initState) {
  return function(state = { data: initState }, action) {
    return action.type === type ?
      Object.assign({}, state, { data: action.payload }) :
      state;
  };
}
