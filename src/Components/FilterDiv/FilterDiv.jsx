import ReactDOM from 'react-dom'
import React, { useContext } from 'react';

// icons
import { IoIosCloseCircleOutline, IoIosCheckmarkCircleOutline } from "react-icons/io";

// context
import { ContextData } from '../../contexts/context'

// css
import './FilterDiv.css'

export default function FilterDiv(props) {

    const context = useContext(ContextData)

    return ReactDOM.createPortal(
        <div className={context[1].filterDiv ? 'filter-box active' : 'filter-box'}>
            <div className="top-bar">
                <h3>مرتب سازی بر اساس</h3>
                <IoIosCloseCircleOutline onClick={() => context[1].setFilterDiv(prev => !prev)} />
            </div>
            <ul>
                {props.items && props.items.map(item => (
                    <li className={item.isActive && 'active'} key={item.id}>
                        <span>{item.name}</span>
                        <IoIosCheckmarkCircleOutline />
                    </li>
                ))}
            </ul>
        </div>
        , document.getElementById('filter-div'))
}
