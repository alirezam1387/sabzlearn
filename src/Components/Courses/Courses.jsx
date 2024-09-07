// components
import TitleBox from '../TitleBox/TitleBox.jsx'

// icons
import { FaArrowLeft } from "react-icons/fa";

// components
import CourseBox from '../CourseBox/CourseBox.jsx';

// bootstrap
import { Col, Row } from 'react-bootstrap';

// images
import CourseImg from '../../Assets/images/course.png'


export default function Courses() {
    return (
        <>
            <TitleBox color="#FBBF24" title="آخرین دوره های سبزلرن" subTitle="سکوی پرتاپ شما به سمت موفقیت" isLeft>
                <a href='#' className='see-all rounded-pill'>مشاهده همه دوره ها<FaArrowLeft /></a>
            </TitleBox>

            <Row className='row-gap-4'>
                <Col xl={3} md={4} sm={6} xs={12}>
                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                        img={CourseImg}
                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                    />
                </Col>
                <Col xl={3} md={4} sm={6} xs={12}>
                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                        img={CourseImg}
                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                    />
                </Col>
                <Col xl={3} md={4} sm={6} xs={12}>
                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                        img={CourseImg}
                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                    />
                </Col>
                <Col xl={3} md={4} sm={6} xs={12}>
                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                        img={CourseImg}
                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                    />
                </Col>
            </Row>
        </>
    )
}
