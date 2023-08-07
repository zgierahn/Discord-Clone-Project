import React from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../images/nav-logo-discord.jpeg"

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const history=useHistory()

	return (
		<div className='NavBarContainer'>
			<div>
				<img src={logo} onClick={() => {history.push('/')}}/>
				{/* <NavLink exact to="/">Home</NavLink> */}
			</div>
			<div className='ATagsInNav'>
				<a onClick={()=>alert("Link is for Decorative purposes")}>Download</a>
				<a onClick={()=>alert("Link is for Decorative purposes")}>Nitro</a>
				<a onClick={()=>alert("Link is for Decorative purposes")}>Discover</a>
				<a onClick={()=>alert("Link is for Decorative purposes")}>Safety</a>
				<a onClick={()=>alert("Link is for Decorative purposes")}>Support</a>
				<a onClick={()=>alert("Link is for Decorative purposes")}>Blog</a>
				<a onClick={()=>alert("Link is for Decorative purposes")}>Careers</a>
			</div>
			<div className='nav-login-Signup-div'>
				<button className="MenuButton" onClick={() => {history.push('/login')}}>Login</button>
				<button className='LandingBottomSignUp' onClick={() => history.push('/signup')}>Sign Up </button>
			</div>

			{/* {isLoaded && (
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			)} */}
		</div>
	);
}

export default Navigation;
