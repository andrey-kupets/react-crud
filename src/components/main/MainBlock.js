import React, { useEffect } from "react";
import styles from './MainBlock.module.css';
import { userService } from "../../services/UserService";

export const MainBlock = () => {
  useEffect(async () => {
    const users = await userService.getUsers();
    console.log(users);
  },[]);


  return (
    <div className={styles.main}>
      MainBlock
    </div>
  )
};
