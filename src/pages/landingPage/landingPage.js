import react from 'react'
import style from './landingPage.module.css'
import SearchBar from '../../components/searchBar/searchBar'
import {WiStars} from 'react-icons/wi'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Footer from '../../components/footer/footer'
import NavBar from '../../components/navbar/navbar'

export default function LandingPage() {
    return (
        <div className={style["container"]}>
            <div className={style["bgimg"]}>
                <NavBar/>
                <div className={style["bg-title"]}>
                    <h1 className={style["banner-title"]}>Restaurant food, takeaway and <h1 className={style["banner-title-blue"]}>groceries. Delivered.</h1></h1>
                </div>
                <div>
                    <p>Enter a postcode to see what we deliver</p>
                </div>
                <SearchBar/>
                <div className={style["bar-login"]}>
                    <a>Log in </a>
                    <p>for your recent addresses.</p>
                </div>
            </div>
            <div className={style["track-tab"]}>
                <div className={style["track-tab-inner"]}>
                    <h2>Track orders to your door</h2>
                    <p>Get your favourite food delivered in a flash. Youll see when your riders picked up your order,
                         and be able to follow them along the way. Youll get a notification when theyre nearby, too.</p>
                    <div className={style["store-btns"]}>
                        <button className={style["app-store-btn"]}>App Store</button>
                        <button className={style["play-store-btn"]}>Google Play</button>
                    </div>
                </div>
                <div className={style["tab-map-img"]}></div>
            </div>
            <div className={style["deal-tab"]}>
                <div className={style["deal-header"]}>
                    <WiStars/>
                    <h2>Up to 25% off - Meal Deals</h2>
                    <WiStars/>
                </div>
                <p>Need a midweek pick-me-up, a break from cooking for the 
                    family or just fancy your favourite restaurant?
                </p>
                <p>Service and delivery fees, Subject to availability. 
                    Participating Restaurants Only. Ts&Cs apply. 
                    <a>Terms.</a>
                </p>
            </div>
            <div className={style["four-tabs"]}>
                <div className={style["tab-wrapper"]}>
                    <div className={style["tab"]}>
                        <div className={style["tab-inner"]}>
                            <h3>Partner with us</h3>
                            <p>Join Deliveroo and reach more customers than ever. 
                                We handle delivery, so you can focus on the food.
                            </p>
                            <button className={style["start-btn"]}>Get Started <HiArrowNarrowRight/></button>
                        </div>
                    </div>
                    <div className={style["tab1"]}>
                        <div className={style["tab-inner"]}>
                            <h3>Ride with us</h3>
                            <p>The freedom to fit work around your life. 
                                Plus great fees, perks and discounts.
                            </p>
                            <button className={style["start-btn"]}>Get Started <HiArrowNarrowRight/></button>
                        </div>
                    </div>
                </div>
                
                <div className={style["tab-wrapper"]}>
                    <div className={style["tab2"]}>
                        <div className={style["tab-inner"]}>
                            <h3>Deliveroo For Work</h3>
                            <p>Looking for a workplace food solution to reward your team, 
                                boost morale or treat your clients? Our corporate team can help.
                            </p>
                            <button className={style["start-btn"]}>Get Started <HiArrowNarrowRight/></button>
                        </div>
                    </div>
                    <div className={style["tab3"]}>
                        <div className={style["tab-inner"]}>
                            <h3>Gift Cards</h3>
                            <p>Looking for an easy way to treat your friends and family? Give the gift of great food with a Deliveroo gift card.
                            </p>
                            <button className={style["start-btn"]}>Get Started <HiArrowNarrowRight/></button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}