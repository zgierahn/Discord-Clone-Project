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
                <h3 className='white'>Emily Breininger</h3>
                <ul>
                    <li className='white'>Github: </li>
                    <li className='white'>LinkdIn: </li>
                </ul>
            </div>
            <div>
                <h3 className='white'>Matt Boyer</h3>
                <ul>
                    <li className='white'>Github: </li>
                    <li className='white'><a className='anchorLinks' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">LinkdIn</a></li>
                </ul>
            </div>
            <div>
                <h3 className='white'>Mike Oyola</h3>
                <ul>
                    <li className='white'>Github: </li>
                    <li className='white'>LinkdIn: </li>
                </ul>
            </div>
            <div>
                <h3 className='white'>Zach Gierahn</h3>
                <ul>
                    <li className='white'>Github: </li>
                    <li className='white'>LinkdIn: </li>
                </ul>
            </div>

        </main>
    </>
  )
}

export default DevTeam
