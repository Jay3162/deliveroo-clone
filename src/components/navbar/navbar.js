import React, {useState} from 'react'
import style from './navbar.module.css'
import {FiChevronDown} from 'react-icons/fi'
import {AiOutlineHome} from 'react-icons/ai'
import {MdMenu} from 'react-icons/md'



export default function NavBar(props) {
    const deliveroo = new URL('/public/deliveroo-logo.webp', import.meta.url)
    const [isOn, setIsOn] = useState(false);
    const [menuOn, setMenuOn] = useState(false);

    const MenuList = (props) => {
        return (
            <a className={style["nav-btns"]} >
                {isOn && props.children}
                
            </a>
        )    
    }

    const SideList = (props) => {
        return (
            <li>
                <a className={style["menu-btns"]} >
                    {menuOn && props.children}
                
                </a>
            </li>

        )    
    }

    return (
        <div className={style["nav"]}>
            <div className={style["logo"]}>
                <a>
                    <img className={style["icon"]} src={deliveroo}/>
                    deliveroo
                </a>
            </div>
            <div className={style["nav-btns"]}>
                <button className={style["nav-btn"]} onClick={() => setIsOn(!isOn)}><FiChevronDown className={style["icon-color"]}/>Partner with us</button>
                <div className={style["sidemenu-bg"]}>
                    {isOn ? <div className={style["partner-opts"]}>
                        <MenuList>Riders</MenuList>
                        <MenuList>Restaurants</MenuList>
                        <MenuList>Careers</MenuList>
                        <MenuList>Deliveroo for Work</MenuList>
                    </div> : 
                    <div></div>}
                </div>                
                <button className={style["nav-btn"]}><AiOutlineHome className={style["icon-color"]}/>Sign up or log in</button>

                <button className={style["nav-btn"]} onClick={() => setMenuOn(!menuOn)}><MenuList/><MdMenu className={style["icon-color"]}/>Menu</button>
                {menuOn ? <div>
                    <SideList className={style["partner-opts"]}>
                        <div className={style["sidemenu"]}>
                        <img className={style["icon"]} src={deliveroo}/>
                        deliveroo
                        <button className={style["close-btn"]} onClick={() => setMenuOn(!menuOn)}>&times;</button>
                        </div>
                        <hr></hr>
                        <button className={style["sign-in"]}>Sign up or log in</button>
                        <div className={style["faqs"]}>
                            ? FAQs
                        </div>
                        <button className={style["language"]}>English</button>
                        <button className={style["region"]}>United Kingdom</button>
                    </SideList>
                </div> : <div></div>}
            </div>
        </div>
    )
}