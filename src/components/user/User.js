import React from "react";
import styles from'./User.module.css';

export const User = (props) => {
  const {
    _id,
    username,
    first_name,
    last_name,
    email,
    user_type,
    displayForm
  } = props;

  return (
    <div onClick={() => displayForm(_id)} className={styles.users_wrapper}>
      <div className={styles.user_item}>{username}</div>
      <div className={styles.user_item}>{first_name}</div>
      <div className={styles.user_item}>{last_name}</div>
      <div className={styles.user_item}>{email}</div>
      <div className={styles.user_item}>{user_type}</div>
    </div>
  )
};
