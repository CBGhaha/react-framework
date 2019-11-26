import React from 'react';
import MyuseState from './useState';
import UseCallbackAnduseMemo from './useCallbackAnduseMemo';
import MyUseReducer from './useReducer';
import MyuseContext from './useContext';
import MyuseEffect from  './useEffect';
import MyuseRef from './useRef';
import styles from  './index.less'

export default function Hooks(){
  return(
    <div>
      <p>hooks</p>
      <div className={styles["content-part"]}>
        <MyuseState/>
      </div>
      <div className={styles["content-part"]}>
        <UseCallbackAnduseMemo/>
      </div>
      <div className={styles["content-part"]}>
        <MyUseReducer/>
      </div>
      <div className={styles["content-part"]}>
        <MyuseContext/>
      </div>
      <div className={styles["content-part"]}>
        <MyuseEffect/>
      </div>
      <div className={styles["content-part"]}>
        <MyuseRef/>
      </div>
    </div>
    )
}