import React from 'react'
import { useHistory } from 'react-router-dom'
import backgroundImg from "../../images/Login-bg.jpeg"
import logo from "../../images/nav-logo-discord.jpeg"

import "./devTeam.css"

function DevTeam() {
    const history = useHistory();

  return (
    <>
        <img className="dev-bg" src={backgroundImg} />
        <nav className='devTeamNav'>
        <div>
			<button className='GoHomeButton' onClick={() => history.push('/')}>Home Page</button>
        </div>
            <h4 className='DevTitle'>Our Developer Team</h4>
            <div className='nav-login-Signup-div'>
				<button className="DevMenuButton" onClick={() => {history.push('/login')}}>Login</button>
			</div>
        </nav>
        <main className='creditsbox'>
            <div >
                <h3>Emily Breininger</h3>
                <ul>
                    <li>Github: </li>
                    <li>LinkdIn: </li>
                </ul>
            </div>
            <div>
                <h3>Matt Boyer</h3>
                <ul>
                    <li>Github: </li>
                    <li>LinkdIn: </li>
                </ul>
            </div>
            <div>
                <h3>Mike Oyola</h3>
                <ul>
                    <li>Github: </li>
                    <li>LinkdIn: </li>
                </ul>
            </div>
            <div>
                <h3>Zach Gierahn</h3>
                <ul>
                    <li>Github: </li>
                    <li>LinkdIn: </li>
                </ul>
            </div>

        </main>
    </>
  )
}

export default DevTeam
