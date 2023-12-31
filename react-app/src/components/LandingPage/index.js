
import { NavLink } from 'react-router-dom'
import React from 'react'
import mainShoe from "../../images/main-shoe.jpg"
import { useHistory } from 'react-router-dom'
import solologo from "../../images/solo-discord-logo.png"


import './LandingPage.css'


function LandingPage() {
    const history = useHistory()

    return (
        <>
            <div className="ImagineContainer">
                <h1>IMAGINE A PLACE...</h1>
                <div className="paragraph">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
                <img src="https://theme.zdassets.com/theme_assets/678183/b7e9dce75f9edb23504e13b4699e208f204e5015.png" alt='broken' />
                <div className="ButtonContainer">
                    <button onClick={()=>alert("Link is for Decorative purposes")} className="MacButton"><i className="fa-regular fa-arrow-down-to-line" />Download for Mac</button>
                    <button onClick={()=>{history.push("/login")}} className="BrowserButton">Open Discord in your browser</button>
                </div>
            </div>

            <div className="SecondContainer">
                <img className="SecondImg" src="https://img.inews.co.id/media/600/files/inews_new/2021/08/11/Cara_Menggunakan_Discord.jpg" alt='broken' />
                <div className="CreateParagraph">
                    <h2>Create an invite-only place where you belong</h2>
                    <div className="TextForCont2">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</div>
                </div>

            </div>
            <div className="ThirdContainer">
                <div className="HangingParagraph">
                    <h2>Where hanging out is easy</h2>
                    <div className="TextForCont2">Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</div>
                </div>
                <img src="https://www.educaciontrespuntocero.com/wp-content/uploads/2021/09/discord-canales.jpg" alt='broken' />

            </div>

            <div className="SecondContainer">
                <img className="FourthImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WGGFqQmMWAgGMVUQl44IExpYaWxIblG9GaswyyLZyj18ywWVfhvQYO8VQu5KbsZHpN0&usqp=CAU" alt='broken' />
                <div className="CreateParagraph">
                    <h2>From few to a fandom</h2>
                    <div className="TextForCont2">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</div>
                </div>

            </div>


            <div className="FifthContainer">
                <div className="FifthHeading">RELIABLE TECH FOR STAYING CLOSE</div>
                <div className="FifthText">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</div>
                <img className="FifthImg" src="https://www.iplandigital.co.th/wp-content/uploads/2022/08/discord.com_-1024x516.png" alt='broken' />
                <div className="FifthFooter">Ready to start your journey?</div>
                <button onClick={()=>alert("Link is for Decorative purposes")} className="FifthButton">Download for Mac</button>
            </div>

            <div className="FooterContainer">
                <div className="ResourcesContainer">
                    <div className="LeftResourcesConatainer">
                        <div className="LanguageContainer"> <img src="https://cdn3.vectorstock.com/i/1000x1000/68/67/flag-of-united-states-of-america-square-icon-vector-12656867.jpg" alt='broken' /> English, USA</div>
                        <div className="BrandIcons"> <i className="fa-brand fa-twitter"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-youtube"></i> <i className="fa-brands fa-tiktok"></i> </div>
                        <div>
                            <h5>Brought to you By:</h5>
                            <div className='devBox' onClick={()=>{history.push("/ourDevTeam")}}>
                                <p className='LandingDevName'>Emily Breininger</p>
                                <p className='LandingDevName'>Matt Boyer</p>
                                <p className='LandingDevName'>Michael Oyola</p>
                                <p className='LandingDevName'>Zach Gierahn</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5>Product</h5>
                        <div className='ATagContainer'>
                            <a onClick={()=>alert("Link is for Decorative purposes")} >Download</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Nitro</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Status</a>
                        </div>
                    </div>

                    <div>
                        <h5>Company</h5>
                        <div className='ATagContainer'>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>About</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Jobs</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Brand</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Newsroom</a>
                        </div>
                    </div>

                    <div>
                        <h5>Resources</h5>
                        <div className='ATagContainer'>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>College</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Support</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Safety</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Blog</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Feedback</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Developers</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Streamkit</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Creators</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Community</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Official Third Party Merch</a>
                        </div>
                    </div>

                    <div>
                        <h5>Policies</h5>
                        <div className='ATagContainer'>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Terms</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Privacy</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Cookie Settings</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Guidelines</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Acknowledgements</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Licenses</a>
                            <a onClick={()=>alert("Link is for Decorative purposes")}>Company Information</a>
                        </div>
                    </div>

                </div>
                <div className="FooterNav">
                    <div className="BottomHomeIcon"> <img src={solologo}/> Discord</div>
                    <button className='LandingBottomSignUp' onClick={() => history.push('/signup')}>Sign Up </button>
                </div>
            </div>

        </>


    )

}


export default LandingPage
