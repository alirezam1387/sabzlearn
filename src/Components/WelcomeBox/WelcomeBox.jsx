// icons
import { FaRegBell } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

// images 
import userImg from '../../Assets/images/user.png'

// context
import { useContext } from "react";
import { ContextData } from "../../contexts/context";

// css
import './WelcomeBox.css'

export default function WelcomeBox({ name }) {
    const context = useContext(ContextData)
    return (
        <div className='welcome-box'>
            <p> {name} عزیز؛ خوش اومدی 🙌</p>
            <div className="btns d-none d-md-flex">
                <button className="header-btn"><FaRegBell /></button>
                <button className="header-btn" onClick={() => context[3].setIsDark(prev => !prev)}>{context[3].isDark ? <FiSun /> : <FiMoon />}</button>
                <button className="header-btn user-img">
                    <img src={userImg} alt="user img" />
                </button>
            </div>
        </div>
    )
}
