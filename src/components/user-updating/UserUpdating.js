import React, { useState } from "react";
import styles from './UserUpdating.module.css';
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../services/UserService";
import { setError, setSuccessMsg } from "../../redux/action-creators";
import { errorsEnum } from "../../errors/errors.enum";

export const UserUpdating = ({statusForm}) => {
  const dispatch = useDispatch();
  const { user, language } = useSelector(({users, language}) => ({ ...users, ...language }));

  const [userData, setUserData] = useState({ ...user, password: '' });

  const inputData = (e) => {
    const { target: { value, name } } = e;

    setUserData({
      ...userData,
      [name]: value
    });
  };

  const onDeleteClick = async () => {
    try {
      const res = await userService.deleteOneUser(user._id);

      dispatch(setSuccessMsg(res[language]));
      dispatch(setError(null));

      statusForm(false);
    } catch ({ response: { data } }) {
      dispatch(setError(errorsEnum[data.customCode][language]));
    }
  };

  const onSaveClick = async () => {
    try {
      const res = await userService.updateOneUser(user._id, userData);

      dispatch(setSuccessMsg(res[language]));
      dispatch(setError(null));

      statusForm(false);
    } catch ({ response: { data } }) {
      dispatch(setError(errorsEnum[data.customCode][language]));
    }
  };

  return (
    <div className={styles.action_wrapper}>
      <label>Username<br/>
        <input
          className={styles.input__size}
          name='username'
          value={userData.username}
          onChange={inputData}
          type="text"
        />
      </label>
      <label>First name<br/>
        <input
          className={styles.input__size}
          name='first_name'
          value={userData.first_name}
          onChange={inputData}
          type="text"
        />
      </label>
      <label>Last name<br/>
        <input
          className={styles.input__size}
          name='last_name'
          value={userData.last_name}
          onChange={inputData}
          type="text"
        />
      </label>
      <label>Email<br/>
        <input
          className={styles.input__size}
          name='email'
          value={userData.email}
          onChange={inputData}
          type="email"
        />
      </label>
      <label>Type<br/>
        <input
          className={styles.input__size}
          name='user_type'
          value={userData.user_type}
          onChange={inputData}
          type="text"
        />
      </label>
      <label>Password<br/>
        <input
          className={styles.input__size}
          name='password'
          value={userData.password}
          onChange={inputData}
          type="password"
        />
      </label>
      <div className={styles.buttons_wrapper}>
        <button
          onClick={onDeleteClick}
          className={styles.button__delete}
        >Delete
        </button>
        <button
          onClick={onSaveClick}
          className={styles.button__save}
        >Save
        </button>
      </div>
    </div>
  )
};
