// components
import InfoBox from "../Components/InfoBox/InfoBox"
import DashboardCourses from '../Components/DashboardCourses/DashboardCourses'
import TitleBox from '../Components/TitleBox/TitleBox'

// icons
import { FaRegCreditCard, FaRegComment, FaArrowLeft } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

// bootstrap
import { Row, Col } from 'react-bootstrap'

export default function MainPage() {
    return (
        <div className="min-h-100">
            <Row className="mt-50 row-gap-4">
                <Col xl={4} md={6} xs={12}><InfoBox title="مجموع پرداخت ها" data="16 دوره" color="#FACC15" icon={<FaRegCreditCard />} /></Col>
                <Col xl={4} md={6} xs={12}><InfoBox title="دوره های من" data="2,676,800 تومان" color="#4E81FB" icon={<MdOutlineRocketLaunch />} /></Col>
                <Col xl={4} md={6} xs={12}><InfoBox title="کامنت های ارسال شده" data="3 کامنت" color="#2ED573" icon={<FaRegComment />} /></Col>
            </Row>
            <div className="mt-50">
                <TitleBox title="دوره های من" isLeft>
                    <a href='#' className='see-all rounded-pill'>مشاهده همه دوره ها<FaArrowLeft /></a>
                </TitleBox>
            </div>
            <DashboardCourses />
        </div>
    )
}
