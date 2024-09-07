import ReactDOM from 'react-dom'

// components
import { SidebarItem } from '../DashboardSidebar/DashboardSidebar'

// icons
import { RiHome4Line } from "react-icons/ri";
import { FaRegUser, FaRegFolder } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

// images 
import icon from '../../Assets/images/icon.png'

// context
import { useContext } from "react";
import { ContextData } from "../../contexts/context";

export default function DashboardResponsive() {
  const context = useContext(ContextData)


  return ReactDOM.createPortal(
    <>
      <div className={context[2].dashboardSidebar ? 'DashboardResponsive' : 'DashboardResponsive in-active'}>
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
      <div className={context[2].dashboardSidebar ? 'overlay' : 'overlay in-active'} onClick={() => context[2].setDashboardSidebar(false)}></div>

    </>
    , document.getElementById('responsive-haeder'))
}
