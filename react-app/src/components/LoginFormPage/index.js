import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory,Link } from "react-router-dom";
import './LoginForm.css';
import backgroundImg from "../../images/Login-bg.jpeg"


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (sessionUser) return <Redirect to={`/${sessionUser.id}/servers`} />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login({email, password}));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <>
    <img className="pic-bg" src={backgroundImg} />
    <div className='login'>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="heading">
      <h3 className='header'>Welcome back!</h3>
      <p>We're so excited to see you again!</p>
      </div>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="inputs">
        <label className="login-labels">
          EMAIL
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="login-labels">
          PASSWORD
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        </div>
        <button type="submit" >Log In</button>
        <button className="demo-user" onClick={() => {
          // setErrors({});
          return dispatch(login({ email:'demo@aa.io', password:'password' }))

        }} >Demo User</button>
        <button className="demo-user" onClick={() => {
          // setErrors({});
          return dispatch(login({ email:'marnie@aa.io', password:'password' }))
          .then(()=>history.push('/2/servers'))
        }} >Demo User 2</button>
      {/* <button onClick={() => { history.push(`/signup`)}}>Register</button> */}
      <p>Need an account?</p> <Link className="registerLink" to={`/signup`}>Register</Link>
      </form>
      </div>
    </>
  );
}

export default LoginFormPage;
