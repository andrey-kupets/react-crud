import React from "react";
import styles from'./User.module.css';

export const User = (props) => {
  const {
    username,
    first_name,
    last_name,
    email,
    user_type
  } = props;

  return (
    <div className={styles.users_wrapper}>
      <div className={styles.user_item}>{username}</div>
      <div className={styles.user_item}>{first_name}</div>
      <div className={styles.user_item}>{last_name}</div>
      <div className={styles.user_item}>{email}</div>
      <div className={styles.user_item}>{user_type}</div>
    </div>
  )
};
