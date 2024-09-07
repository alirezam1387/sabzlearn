// components
import ShadowBox from "../ShadowBox/ShadowBox";

// icons
import { FaPlay } from "react-icons/fa6";

// images
import LandingImg from '../../Assets/images/landing.png'
import LandingLightImg from '../../Assets/images/landingLight.png'

// context
import { ContextData } from "../../contexts/context";
import { useContext } from "react";

// css
import './Landing.css'

export default function Landing() {
    const context = useContext(ContextData)

    return (
        <section className="landing" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
            <ShadowBox width="400px" height="400px" color='#4DB6AC' top='0' right='-100px' />
            <ShadowBox width="300px" height="300px" color='#039BE5' top='300' right='300px' />
            <img src={context[3].isDark ? LandingImg : LandingLightImg} alt="landing" />
            <h2>آکادمی آموزش</h2>
            <h2>برنامه نویسی سبزلرن</h2>
            <p className="subtitle">
                با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو<br /> با خیال راحت یاد بگیر و پیشرفت کن
            </p>
            <div className="d-flex align-items-center gap-4">
                <a href='#' className='start-btn rounded-pill bg-gradient'>از این مسیر ها شروع کن</a>
                <div className='video-btn d-flex align-items-center gap-2'>
                    <a href="#" className="bg-gradient"><FaPlay /></a>
                    <span>دوره های رایگان</span>
                </div>
            </div>
        </section>
    )
}
