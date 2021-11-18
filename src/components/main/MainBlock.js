import React, { useEffect } from "react";
import styles from './MainBlock.module.css';
import { useDispatch, useSelector } from "react-redux";
import { loadUsersData } from "../../redux/action-creators";

export const MainBlock = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(({ users }) => users)
  useEffect( () => {
    dispatch(loadUsersData());
  },[]);

    console.log(users);

  return (
    <div className={styles.main}>
      MainBlock
    </div>
  )
};
