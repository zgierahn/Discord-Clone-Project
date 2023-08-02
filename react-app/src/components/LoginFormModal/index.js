import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";


function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login({email, password}));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      <button className="demo-user" onClick={() => {
          // setErrors({});
          return dispatch(login({ email:'demo@aa.io', password:'password' }))
          .then(()=>history.push(`/1/servers`))
          .then(closeModal)
        }} >Demo User</button>
        <button className="demo-user" onClick={() => {
          // setErrors({});
          return dispatch(login({ email:'marnie@aa.io', password:'password' }))
          .then(()=>history.push(`/2/servers`))
          .then(closeModal)
        }} >Demo User 2</button>
    </>
  );
}

export default LoginFormModal;
