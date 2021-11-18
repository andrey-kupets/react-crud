import React from "react";
import styles from './SuccessMsg.module.css';
import { useSelector } from "react-redux";

export const SuccessMsg = () => {
  const { successMsg } = useSelector(({ successMsg }) => successMsg);
  return (
    <>
      {successMsg && <div className={styles.msg_wrapper}>{successMsg}</div>}
    </>
  )
};
