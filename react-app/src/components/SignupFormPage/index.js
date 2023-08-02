import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect,Link } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';
import backgroundImg from "../../images/Login-bg.jpeg"

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  if (sessionUser) return <Redirect to={`/${sessionUser.id}/servers`}/>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
        const data = await dispatch(signUp(username, email, password));
        if (data) {
          setErrors(data)
        }
    } else {
        setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };

  return (
    <>
    <img className="pic-bg" src={backgroundImg} />
    <div className='signup'>
      <form className="signupForm" onSubmit={handleSubmit}>
      <h3 className='header'>Create an account</h3>
        <ul calssName="errorsCont">
          {errors.map((error, idx) => <div className="errorslog"key={idx}>{error}</div>)}
        </ul>
        <label className="login-labels">
          EMAIL
          <input className='inputLogin'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label >
        <label className="login-labels">
          USERNAME
          <input className='inputLogin'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <label className="login-labels">
          CONFIRM PASSWORD
          <input className='inputLogin'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button className="continuebtn" type="submit" >Continue</button>
      <Link className='backLink'to={`/login`}>Already have an account?</Link>
      </form>
      </div>
    </>
  );
}

export default SignupFormPage;
