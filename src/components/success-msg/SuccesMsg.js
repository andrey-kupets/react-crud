import React from "react";
import styles from './SuccessMsg.module.css';

export const SuccessMsg = ({msg}) => <div className={styles.msg_wrapper}>{msg}</div>;
