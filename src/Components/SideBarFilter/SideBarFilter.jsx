// icons
import { FaSearch } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";

// context
import { ContextData } from "../../contexts/context";
import { useContext } from "react";

// css
import './SideBarFilter.css'

function SideBarBox({ title, isFilterbtn, children }) {
    return (
        <>
            {!isFilterbtn && (
                <div className="sidebar-box">
                    {children}
                </div>
            )}

            {isFilterbtn && (
                <div className="sidebar-box filter-btn">
                    <h3>{title}</h3>
                </div>
            )}
        </>
    )
}

export default function SideBarFilter(props) {
    
    const context = useContext(ContextData)


    return (
        <div className="Sidebar-filter row-gap-sm-4 row-gap-1">
            <SideBarBox>
                <div className="search-box">
                    <input type="text" placeholder={props.searchTitle} />
                    <button type='submit'><FaSearch /></button>
                </div>
            </SideBarBox>
            {props.allSidebar &&
                <div className="filter-div row-gap-sm-4 row-gap-1 gap-1 gap-sm-4">
                    <SideBarBox title="فقط دوره های رایگان" isFilterbtn />
                    <SideBarBox title="در حال پیش فروش" isFilterbtn />
                    <SideBarBox title="دوره ها خریداری شده" isFilterbtn />
                </div>}

            <button className="mobile-btn d-flex d-lg-none" onClick={() => context[1].setFilterDiv(prev => !prev)}>
                <LuArrowDownUp />
                <span>مرتب سازی بر اساس</span>
            </button>
        </div>
    )
}

