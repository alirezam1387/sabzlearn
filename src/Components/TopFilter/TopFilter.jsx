// icons
import { HiArrowsUpDown } from "react-icons/hi2";

// css
import './TopFilter.css'

export default function TopFilter(props) {
    return (
        <div className="top-filter d-none d-lg-flex">
            <h3 className="title">
                <HiArrowsUpDown />
                <span>مرتب سازی بر اساس : </span>
            </h3>
            <div className="items">
                {props.items && props.items.map(item => <a key={item.id} href={item.link} className={item.isActive ? 'items active' : 'item'}>{item.name}</a>)}
            </div>
        </div>
    )
}
