import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import './LoginForm.css';
import * as sessionActions from "../../store/session";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  // if (sessionUser) return <Redirect to="/" />;
console.log('--------',sessionUser)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login({email, password}))
    .then(()=>history.push(`/${sessionUser.id}/servers`))
    console.log('data', data)
    if (data) {
      setErrors(data);
    }
    // if (!errors.length)
  };
  // if (!sessionUser) return null
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
        <button type="submit" >Log In</button>
        <button className="demo-user" onClick={() => {
          // setErrors({});
          return dispatch(login({ email:'demo@aa.io', password:'password' }))
          .then(()=>history.push(`/1/servers`))

        }} >Demo User</button>
         <button className="demo-user" onClick={() => {
          // setErrors({});

          return dispatch(login({ email:'marnie@aa.io', password:'password' }))
          .then(()=>history.push(`/2/servers`))
        }} >Demo User 2</button>
      </form>
      <button onClick={() => { history.push(`/signup`)}}>Register</button>
    </>
  );
}

export default LoginFormPage;
