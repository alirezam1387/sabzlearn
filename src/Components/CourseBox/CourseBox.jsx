import { useState } from "react";

// components
import Loader from "../Loader/Loader";

// icons
import { HiOutlineUsers } from "react-icons/hi2";
import { FaStar, FaRegUser } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";

// css
import './CourseBox.css'


export default function CourseBox({ title, subtitle, img, teacher, point, users, mainPrice, offPrice }) {

    const [isImgLoaded, setIsImgLoaded] = useState(false)

    return (
        <div className="course-box" data-aos="flip-left" data-aos-delay="250" data-aos-duration="1500">
            {!isImgLoaded && <Loader />}
            <img src={img} alt={title}
                onLoad={() => setIsImgLoaded(true)} />
            <div className="info">
                <h3 className="title"><a href="#">{title}</a></h3>
                <p className="subtitle">{subtitle}</p>
                <div className="other-info">
                    <a href='#' className="teacher">
                        <FaRegUser />
                        <span>{teacher}</span>
                    </a>
                    <div className="stars">
                        <span>{point}</span>
                        <FaStar />
                    </div>
                </div>
                <div className="footer-box">
                    <div className="users">
                        <HiOutlineUsers />
                        <span>{users}</span>
                    </div>
                    <div className="price">
                        <span>{mainPrice}</span>
                        <div className="off-price">
                            <span>{offPrice}</span>
                            <RiDiscountPercentLine />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
