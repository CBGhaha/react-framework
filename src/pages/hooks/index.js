import React from 'react';
import MyuseState from './useState';
import UseCallbackAnduseMemo from './useCallbackAnduseMemo'
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
    </div>
    )
}