import React, { useId, useRef } from 'react'
import ReactDOM from 'react-dom'

// icons
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

// context
import { ContextData } from '../../contexts/context'
import { useContext } from 'react';

// images
import icon from '../../Assets/images/icon.png'

// css
import './ResponsiveHeader.css'

function NavItem({ title, children }) {
    let id = useId()
    let childBox = useRef()

    let Opener = () => {
        childBox.current.classList.toggle('active')
        document.getElementById(id).classList.toggle('active')
    }
    return (
        <>
            <div className="nav-item">
                <li><a href="#">{title}<IoIosArrowDown id={id} onClick={Opener}/></a></li>
                <div className="nav-sub-item" ref={childBox}>
                    <ul className="nav-sub-item-child">
                        {children}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default function ResponsiveHeader() {
    let context = useContext(ContextData)


    function closeSideBar() {
        context[0].setSidebar(false)
    }

    return ReactDOM.createPortal(
        <>
            <div className={context[0].sidebar ? 'sidebar-header' : 'sidebar-header in-active'}>
                <div className="top-header">
                    <img src={icon} alt="icon" />
                    <button onClick={closeSideBar} className="header-btn"><IoMdClose /></button>
                </div>
                <hr />
                <div className="header-search-box rounded-pill mt-4">
                    <input type="text" placeholder='چیو میخوای یاد بگیری؟' />
                    <FiSearch />
                </div>

                <ul>
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

                    <NavItem title="فرانت اند" >
                        <a href="#"><li>دوره آموزش پایتون</li></a>
                        <a href="#"><li>پروژه های کاربردی با پایتون</li></a>
                        <a href="#"><li>بهینه نویسی کد ها در پایتون</li></a>
                        <a href="#"><li>آموزش جنگو</li></a>
                        <a href="#"><li>مصور سازی داده با پایتون</li></a>
                    </NavItem>
                </ul>
            </div>
            <div className={(context[0].sidebar) ? 'overlay' : 'overlay in-active'} onClick={closeSideBar}></div>
        </>
        , document.getElementById('responsive-haeder')
    )
}
