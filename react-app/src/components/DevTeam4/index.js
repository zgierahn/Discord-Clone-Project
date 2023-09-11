import React from 'react'
import { useHistory } from 'react-router-dom'
import backgroundImg from "../../images/Login-bg.jpeg"
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
                <ul className='lineUpLinks'>
                    <li className='white'>
                        <a className='anchorLinks' href="https://www.linkedin.com/in/emily-breininger" target="_blank">LinkdIn</a>
                    </li>
                    <li className='white'>
                        <a className='anchorLinks' href="https://github.com/rainy-dayz" target="_blank">GitHub</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='white'>Matt Boyer</h3>
                <ul className='lineUpLinks'>
                    <li className='white'>
                        <a className='anchorLinks' href="https://www.linkedin.com/in/matt-boyer-90884924" target="_blank">LinkdIn</a>
                    </li>
                    <li className='white'>
                        <a className='anchorLinks' href="https://github.com/Matt-Boyer" target="_blank">GitHub</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='white'>Mike Oyola</h3>
                <ul className='lineUpLinks'>
                    <li className='white'>
                        <a className='anchorLinks' href="https://www.linkedin.com/in/michael-oyola/" target="_blank">LinkdIn</a>
                    </li>
                    <li className='white'>
                        <a className='anchorLinks' href="https://github.com/mmike1717" target="_blank">GitHub</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='white'>Zach Gierahn</h3>
                <ul className='lineUpLinks'>
                    <li className='white'>
                        <a className='anchorLinks' href="https://www.linkedin.com/in/zach-gierahn-7a582742/" target="_blank">LinkdIn</a>
                    </li>
                    <li className='white'>
                        <a className='anchorLinks' href="https://github.com/zgierahn" target="_blank">GitHub</a>
                    </li>
                </ul>
            </div>

        </main>
    </>
  )
}

export default DevTeam
