// icons
import { FaRegBell } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";

// context
import { useContext } from "react";
import { ContextData } from "../../contexts/context";

// images 
import userImg from '../../Assets/images/user.png'

export default function DashboardTopbar() {
    const context = useContext(ContextData)
    
    return (
        <div className="d-block d-md-none">
            <div className='w-100 p-3 d-flex align-items-center justify-content-between'>
                <button className="header-btn" onClick={() => context[2].setDashboardSidebar(true)}>
                    <RiMenu3Line />
                </button>
                <div className="btns d-flex dashboard-topbar">
                    <button className="header-btn"><FaRegBell /></button>
                    <button className="header-btn" onClick={() => context[3].setIsDark(prev => !prev)}>{context[3].isDark ? <FiSun /> : <FiMoon />}</button>
                    <button className="header-btn user-img">
                        <img src={userImg} alt="user img" />
                    </button>
                </div>
            </div>
        </div>
    )
}
