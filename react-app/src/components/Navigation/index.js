import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='NavBarContainer'>
			<div>
				<NavLink exact to="/">Home</NavLink>
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
			{isLoaded && (
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

export default Navigation;
