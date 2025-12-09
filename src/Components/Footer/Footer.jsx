// componetns
import ShadowBox from '../ShadowBox/ShadowBox'

// icon
import { CiPhone } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

// bootstrap
import { Row, Col } from 'react-bootstrap'

// context
import { useContext } from 'react';
import { ContextData } from '../../contexts/context';

// css 
import './Footer.css'

// particles
import Particles from 'react-particles-js';
import { params, lightParams } from './particle';

function FooterInfo({ icon, name }) {
    return (
        <a className="footer-info" href="#">
            {icon}
            <span>{name}</span>
        </a>
    )
}

function SocialBox({ icon, link = '#', color }) {
    return (
        <a style={{
            background: color,
            borderColor: color,
        }} className="social-media" href={link}>
            {icon}
        </a>
    )
}

function FooterLink({ title, link = '#' }) {
    return (
        <a href={link}>
            {title}
        </a>
    )
}

export default function Footer() {
    const context = useContext(ContextData)
    return (
        <footer className="mt-100 position-relative">
            <Particles className='particle' params={context[3].isDark ? params : lightParams} />
            <ShadowBox width="400px" height="400px" color="#E64A19" left='0' />
            <div className="container-md container-fluid">
                <div className="top-footer">
                    <div className="right">
                        <FooterInfo icon={<CiPhone />} name="02191030926" />
                        <FooterInfo icon={<MdAlternateEmail />} name="info@sabzlearn.ir" />
                        <FooterInfo icon={<PiTelegramLogoBold />} name="sabzlearn_support@" />
                    </div>
                    <div className="left">
                        <SocialBox color='#1976D2' icon={<MdAlternateEmail />} />
                        <SocialBox color='#E91E63' icon={<FaInstagram />} />
                    </div>
                </div>
                <hr />
                <Row className="middle-footer">
                    <Col lg={6} xs={12}>
                        <h2 className="title">درباره سبزلرن</h2>
                        <p>شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.</p>
                    </Col>
                    <Col className='mt-lg-0 mt-5' lg={3} xs={6}>
                        <h2 className="title">دوره های پرطرفدار</h2>
                        <ul>
                            <FooterLink title="آموزش پایتون" />
                            <FooterLink title="آموزش جاوااسکریپت" />
                            <FooterLink title="آموزش Html" />
                            <FooterLink title="آموزش Css" />
                        </ul>
                    </Col>
                    <Col className='mt-lg-0 mt-5' lg={3} xs={6}>
                        <h2 className="title">دسترسی سریع</h2>
                        <ul>
                            <FooterLink title="قوانین و مقررات" />
                            <FooterLink title="ارسال تیکت" />
                            <FooterLink title="همه دوره ها" />
                        </ul>
                    </Col>
                </Row>
                <p className="m-0 mt-4">
                    توسعه داده شده توسط
                    <a href="#"> علیرضا اقدم </a>
                </p>
            </div>
        </footer>
    )
}
