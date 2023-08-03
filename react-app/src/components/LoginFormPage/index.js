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
        <div className="gobackbtn" onClick={()=> history.push('/')}><span><i className="fa-solid fa-arrow-left"></i></span> Go Back</div>
        <div className="heading">
      <h3 className='header'>Welcome back!</h3>
      <p className="secondheader">We're so excited to see you again!</p>
      </div>
        <ul className="errors">
          {errors.map((error, idx) => (
            <li className="errorslog" key={idx}>{error}</li>
          ))}
        </ul>
        <div className="inputs">
        <label className="login-labels">
          EMAIL
          <input className='inputLogin'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="login-labels">
          PASSWORD
          <input className='inputLogin'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        </div>
        <div className="buttonsCont">
        <button className="loginbttn" type="submit" >Log In</button>
        <div className="demobtncont">
        <button className="demo-user1" onClick={() => {
          // setErrors({});
          return dispatch(login({ email:'demo@aa.io', password:'password' }))
          .then(history.push('/1/servers'))
        }} >Demo User</button>
        <button className="demo-user1" onClick={() => {
          // setErrors({});
          return dispatch(login({ email:'marnie@aa.io', password:'password' }))
          .then(history.push('/2/servers'))
        }} >Demo User 2</button>
        </div>
        </div>
      {/* <button onClick={() => { history.push(`/signup`)}}>Register</button> */}
      <div className="needacc">Need an account? <Link className="registerLink" to={`/signup`}>Register</Link></div>
      </form>
      </div>
    </>
  );
}

export default LoginFormPage;
