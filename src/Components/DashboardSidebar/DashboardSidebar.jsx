// images 
import icon from '../../Assets/images/icon.png'

// routes
import { NavLink } from 'react-router-dom'

// icons
import { RiHome4Line } from "react-icons/ri";
import { FaRegUser, FaRegFolder } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

// css
import './DashboardSidebar.css'

function SidebarItem({ title, icon, link}) {
    return (
        <NavLink to={link} end={true} className={({isActive}) => (isActive ? 'active' : '')}>
            {icon}
            <span>{title}</span>
        </NavLink>
    )
}

function DashboardSidebar() {
    return (
        <div className='dashboard-sidebar'>
            <center>
                <img src={icon} alt="icon" />
            </center>
            <ul className='sidebar-items'>
                <SidebarItem link='' title="پیشخوان" icon={<RiHome4Line />} />
                <SidebarItem link='courses' title="دوره های من" icon={<FaRegFolder />} />
                <SidebarItem link='edit-info' title="جزئیات حساب" icon={<FaRegUser />} />
                <SidebarItem link='/logout' title="خروج" icon={<MdLogout />} />
            </ul>
        </div>
    )
}

export {SidebarItem, DashboardSidebar}