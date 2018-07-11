import axios from 'axios';
export default function ajaxAxios(url,parms={},method){
  return axios({
    method:method.toLocaleUpperCase(),
    url:url,
    data:parms
  })
}
