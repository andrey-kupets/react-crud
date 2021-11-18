import React, { useEffect } from "react";
import styles from './MainBlock.module.css';
import { useDispatch, useSelector } from "react-redux";
import { loadUsersData } from "../../redux/action-creators";
import { Loading } from "../loading";
import { User } from "../user";
import { Error } from "../error";
import { SuccessMsg } from "../success-msg";

export const MainBlock = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector(({ users }) => users)
  useEffect(() => {
    dispatch(loadUsersData());
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.main_messages}>
        <Error/>
        <SuccessMsg/>
      </div>
      <button className={styles.button__create}>Create</button>
      <div className={styles.main_header}>
        <div className={styles.main_header_item}>USERNAME</div>
        <div className={styles.main_header_item}>FIRST NAME</div>
        <div className={styles.main_header_item}>LAST NAME</div>
        <div className={styles.main_header_item}>EMAIL</div>
        <div className={styles.main_header_item}>TYPE</div>
      </div>
      {(loading || loading === null)
        ? <Loading/>
        : users.map((user) => <User key={user._id} {...user}/>)
      }
    </div>
  )
};
