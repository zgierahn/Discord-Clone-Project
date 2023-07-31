import Navigation from "../Navigation"
import React from 'react'
import mainShoe from "../../images/main-shoe.jpg"

// import Navigation from "../Navigation"
import './LandingPage.css'


function LandingPage() {



    return (
        <>
        <div className="ImagineContainer">
            <h1>IMAGINE A PLACE...</h1>
            <div className="paragraph">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
            <img src="https://theme.zdassets.com/theme_assets/678183/b7e9dce75f9edb23504e13b4699e208f204e5015.png" />
            <div className="ButtonContainer">
                <button className="MacButton"><i className="fa-regular fa-arrow-down-to-line"/>Download for Mac</button>
                <button className="BrowserButton">Open Discord in your browser</button>
            </div>
        </div>

        <div className="SecondContainer">
            <img className="SecondImg" src="https://img.inews.co.id/media/600/files/inews_new/2021/08/11/Cara_Menggunakan_Discord.jpg"/>
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
            <img src="https://www.educaciontrespuntocero.com/wp-content/uploads/2021/09/discord-canales.jpg"/>

        </div>

        <div className="SecondContainer">
            <img className="FourthImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WGGFqQmMWAgGMVUQl44IExpYaWxIblG9GaswyyLZyj18ywWVfhvQYO8VQu5KbsZHpN0&usqp=CAU"/>
            <div className="CreateParagraph">
                <h2>From few to a fandom</h2>
                <div className="TextForCont2">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</div>
            </div>

        </div>


        <div className="FifthContainer">
            <div className="FifthHeading">RELIABLE TECH FOR STAYING CLOSE</div>
            <div className="FifthText">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</div>
            <img className="FifthImg" src="https://www.iplandigital.co.th/wp-content/uploads/2022/08/discord.com_-1024x516.png"/>
            <div className="FifthFooter">Ready to start your journey?</div>
            <button className="FifthButton">Download for Mac</button>
        </div>

        <div className="FooterContainer">
            <div className="ResourcesContainer">
                <div className="LeftResourcesConatainer">
                    <div className="LanguageContainer"> <img src="https://cdn3.vectorstock.com/i/1000x1000/68/67/flag-of-united-states-of-america-square-icon-vector-12656867.jpg"/> English, USA</div>
                    <div className="BrandIcons"> <i className="fa-brand fa-twitter"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-youtube"></i> <i className="fa-brands fa-tiktok"></i> </div>
                    <div>Brought to you By:</div>
                </div>

                <div>
                    <h5>Product</h5>
                    <div className='ATagContainer'>
                        <a href="#">Download</a>
                        <a href="#">Nitro</a>
                        <a href="#">Status</a>
                    </div>
                </div>

                <div>
                    <h5>Company</h5>
                    <div className='ATagContainer'>
                        <a href="#">About</a>
                        <a href="#">Jobs</a>
                        <a href="#">Brand</a>
                        <a href="#">Newsroom</a>
                    </div>
                </div>

                <div>
                    <h5>Resources</h5>
                    <div className='ATagContainer'>
                        <a href="#">College</a>
                        <a href="#">Support</a>
                        <a href="#">Safety</a>
                        <a href="#">Blog</a>
                        <a href="#">Feedback</a>
                        <a href="#">Developers</a>
                        <a href="#">Streamkit</a>
                        <a href="#">Creators</a>
                        <a href="#">Community</a>
                        <a href="#">Official Third Party Merch</a>
                    </div>
                </div>

                <div>
                    <h5>Policies</h5>
                    <div className='ATagContainer'>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookie Settings</a>
                        <a href="#">Guidelines</a>
                        <a href="#">Acknowledgements</a>
                        <a href="#">Licenses</a>
                        <a href="#">Company Information</a>
                    </div>
                </div>

            </div>
            <div className="FooterNav">
                <div className="BottomHomeIcon">Discord</div>
                <div>Sign Up</div>
            </div>
        </div>

        </>


)

}


export default LandingPage
