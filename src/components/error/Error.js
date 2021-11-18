import React from "react";
import styles from './Error.module.css';
import { useSelector } from "react-redux";

export const Error = () => {
  const { error } = useSelector(({ error }) => error);

  return (
      <>
        {error && <div className={styles.error_wrapper}>{error}</div>}
      </>
    )
};
