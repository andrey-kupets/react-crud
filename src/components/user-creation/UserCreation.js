import React, { useState } from "react";
import styles from './UserCreation.module.css';
import { userService } from "../../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { setError, setSuccessMsg } from "../../redux/action-creators";
import { errorsEnum } from "../../errors/errors.enum";

export const UserCreation = ({statusForm}) => {
  const { language } = useSelector(({language}) => language);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    user_type: ''
  });

  const inputData = (e) => {
    const { target: { value, name } } = e;

    setUserData({
      ...userData,
      [name]: value
    });
  };

  const onCreateClick = async () => {
    try {
      const res = await userService.createUser(userData);

      setUserData({
        ...userData,
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        user_type: ''
      });

      dispatch(setSuccessMsg(res[language]));
      dispatch(setError(null));

      statusForm(false);
    } catch ({ response: { data } }) {
      dispatch(setError(errorsEnum[data.customCode][language]));
    }
  };

  return (
    <div className={styles.creation_wrapper}>
      <label>Username<br/>
        <input
          name='username'
          value={userData.username}
          onChange={inputData}
          type="text"
        />
      </label>
      <label>First name<br/>
        <input
          name='first_name'
          value={userData.first_name}
          onChange={inputData}
          type="text"
        />
      </label>
      <label>Last name<br/>
        <input
          name='last_name'
          value={userData.last_name}
          onChange={inputData}
          type="text"
        />
      </label>
      <label>Email<br/>
        <input
          name='email'
          value={userData.email}
          onChange={inputData}
          type="email"
        />
      </label>
      <label>Type<br/>
        <input
          name='user_type'
          value={userData.user_type}
          onChange={inputData}
          type="text"
        />
      </label>
      <label>Password<br/>
        <input
          name='password'
          value={userData.password}
          onChange={inputData}
          type="password"
        />
      </label>
      <button className={styles.button__create} onClick={onCreateClick}>Create</button>
    </div>
  )
};
