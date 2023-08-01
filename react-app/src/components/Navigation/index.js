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
				<a href='#'>Download</a>
				<a href='#'>Nitro</a>
				<a href='#'>Discover</a>
				<a href='#'>Safety</a>
				<a href='#'>Support</a>
				<a href='#'>Blog</a>
				<a href='#'>Careers</a>
			</div>
			<button className="MenuButton" onClick={() => {history.push('/login')}}>Login</button>
			{/* {isLoaded && (
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			)} */}
		</div>
	);
}

export default Navigation;
