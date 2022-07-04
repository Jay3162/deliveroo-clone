import react from 'react'
import style from './footer.module.css'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className={style["container"]}>
            <div className={style["tab-set"]}>
                <div className={style["tab"]}>
                    <ul className={style["column"]}>
                        <h3>Discover Deliveroo</h3>
                        <li>Investors</li>
                        <li>About us</li>
                        <li>Takeaway</li>
                        <li>More</li>
                        <li>Newsroom</li>
                        <li>Foodscene blog</li>
                        <li>Engineering blog</li>
                        <li>Design blog</li>
                        <li>Gift Cards</li>
                        <li>Careers</li>
                        <li>Restaurant signup</li>
                        <li>Become a rider</li>
                    </ul>
                </div>
                <div className={style["tab"]}>
                    <ul className={style["column"]}>
                        <h3>Legal</h3>
                        <li>Terms and conditions</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Modern Slavery Statement</li>
                        <li>Tax Strategy</li>
                    </ul>
                </div>
                <div className={style["tab"]}>
                    <ul className={style["column"]}>
                        <h3>Help</h3>
                        <li>Contact</li>
                        <li>FAQs</li>
                        <li>Cuisines</li>
                        <li>Brands</li>
                    </ul>
                </div>
                <div className={style["tab"]}>
                    <ul className={style["column"]}>
                        <h3>Take Deliveroo with you</h3>
                        <li><button className={style["app-store-btn"]}><AiFillApple/>App Store</button></li>
                        <li><button className={style["play-store-btn"]}><FaGooglePlay/>Google Play</button></li>
                    </ul>
                </div>

            </div>

            <div className={style["social-links"]}>
                <div className={style["socials"]}>
                    <FaFacebook/>
                    <AiOutlineTwitter/>
                    <AiOutlineInstagram/>
                </div>

                <div className={style["copyright"]}>
                    <p>&copy; 2022 Deliveroo</p>
                </div>
            </div>
        </div>
    )
}