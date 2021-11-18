import React, { useEffect, useState } from "react";
import styles from './MainBlock.module.css';
import { useDispatch, useSelector } from "react-redux";
import { loadUsersData, setSuccessMsg } from "../../redux/action-creators";
import { Loading } from "../loading";
import { User } from "../user";
import { Error } from "../error";
import { SuccessMsg } from "../success-msg";
import { UserCreation } from "../user-creation/UserCreation";

export const MainBlock = () => {
  const dispatch = useDispatch();
  const { loading, users, successMsg, error } = useSelector(({ users, successMsg, error }) => ({ ...users, ...successMsg, ...error }))

  const [creation, setCreation] = useState(null);
  const [action, setAction] = useState(null);
  console.log(creation)

  useEffect(() => {
    dispatch(loadUsersData());
  }, [dispatch, successMsg, error]);

  const onCreateClick = () => {
    setCreation(!creation);
    dispatch(setSuccessMsg(false));
  };

  const onActionClick = () => {
    setAction(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.main_messages}>
        <Error/>
        <SuccessMsg/>
      </div>
      <button className={styles.button__create} onClick={onCreateClick}>Create User</button>
      <div className={styles.main_header}>
        <div className={styles.main_header_item}>USERNAME</div>
        <div className={styles.main_header_item}>FIRST NAME</div>
        <div className={styles.main_header_item}>LAST NAME</div>
        <div className={styles.main_header_item}>EMAIL</div>
        <div className={styles.main_header_item}>TYPE</div>
      {creation && <UserCreation statusForm={setCreation}/>}
      {/*{action && <UserCreation/>}*/}
      </div>
      {(loading || loading === null)
        ? <Loading/>
        : users.map((user) => <User key={user._id} {...user}/>)
      }
    </div>
  )
};
