// icons
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch, FiSun, FiUser, FiMenu, FiMoon  } from "react-icons/fi";

// context
import { ContextData } from '../../contexts/context'
import { useContext } from 'react';

// images
import icon from '../../Assets/images/icon.png'



//css
import './Header.css'

function NavItem({ title, children }) {
    return (
        <>
            <div className="nav-item">
                <li><a href="#">{title}<IoIosArrowDown /></a></li>
                <div className="nav-sub-item">
                    <ul className="nav-sub-item-child">
                        {children}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default function Header() {

    let context = useContext(ContextData)

    function openSidebar() {
        context[0].setSidebar(true)
    }


    return (
        <header className='d-flex justify-content-between align-items-center'>
            <button className="header-btn d-none" onClick={openSidebar}><FiMenu /></button>
            <nav className="right-nav">
                <div className="img-box">
                    <img src={icon} alt="icon" />
                </div>
                <ul className='nav-items'>
                    <NavItem title="فرانت اند" >
                        <a href="#"><li>دوره آموزش پایتون</li></a>
                        <a href="#"><li>پروژه های کاربردی با پایتون</li></a>
                        <a href="#"><li>بهینه نویسی کد ها در پایتون</li></a>
                        <a href="#"><li>آموزش جنگو</li></a>
                        <a href="#"><li>مصور سازی داده با پایتون</li></a>
                    </NavItem>
                    <NavItem title="فرانت اند" >
                        <a href="#"><li>دوره آموزش پایتون</li></a>
                        <a href="#"><li>پروژه های کاربردی با پایتون</li></a>
                        <a href="#"><li>بهینه نویسی کد ها در پایتون</li></a>
                        <a href="#"><li>آموزش جنگو</li></a>
                        <a href="#"><li>مصور سازی داده با پایتون</li></a>
                    </NavItem>
                </ul>
            </nav>
            <nav className="left-nav">
                <div className="search-box rounded-pill">
                    <input type="text" placeholder='چیو میخوای یاد بگیری؟' />
                    <FiSearch />
                </div>
                <button className="header-btn search-btn d-none"><FiSearch /></button>
                <button className="header-btn" onClick={() => context[3].setIsDark(prev => !prev)}>{context[3].isDark ? <FiSun /> : <FiMoon />}</button>
                <button className="header-btn"><FiUser /></button>
            </nav>
        </header>
    )
}
