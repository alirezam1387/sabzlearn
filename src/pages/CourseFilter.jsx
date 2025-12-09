import { useState } from "react";

// componetns
import Header from "../Components/Header/Header"
import TopFilter from "../Components/TopFilter/TopFilter"
import SideBarFilter from "../Components/SideBarFilter/SideBarFilter"
import TitleBox from "../Components/TitleBox/TitleBox"
import CourseBox from '../Components/CourseBox/CourseBox';
import Footer from "../Components/Footer/Footer"
import FilterDiv from "../Components/FilterDiv/FilterDiv"
import ShadowBox from "../Components/ShadowBox/ShadowBox"

// images
import CourseImg from '../Assets/images/course.png'

// bootstrap
import { Row, Col } from "react-bootstrap"

function CourseFilter({ title, count }) {
    const [filterList] = useState([
        { id: 1, name: 'همه دوره ها', link: '#', isActive: true },
        { id: 2, name: 'ارزان ترین', link: '#', isActive: false },
        { id: 3, name: 'گران ترین', link: '#', isActive: false },
        { id: 4, name: 'پر مخاطب ها', link: '#', isActive: false },
    ])
    return (
        <>
            <FilterDiv items={filterList} />
            <div className="overflow-hidden">
                <Header />
                <div className="container-md container-fluid mt-200">
                    <TitleBox title={title} color="#FBBF24" isLeft>
                        <h3 className="count">
                            <span>{count}</span>
                            <span> عنوان آموزشی </span>
                        </h3>
                    </TitleBox>
                    <Row className="mt-50 position-relative">
                        <ShadowBox color="#76FF03" width="500px" height="500px" right={0} top="100px" />
                        <Col lg={3} xs={12}>
                            <SideBarFilter allSidebar searchTitle="جستجو بین دوره ها" />
                        </Col>
                        <Col className="mt-4 mt-lg-0" lg={9} xs={12}>
                            <TopFilter items={filterList} />

                            <Row className='row-gap-4 mt-50'>
                                <Col xl={4} sm={6} xs={12}>
                                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                                        img={CourseImg}
                                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                                    />
                                </Col>
                                <Col xl={4} sm={6} xs={12}>
                                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                                        img={CourseImg}
                                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                                    />
                                </Col>
                                <Col xl={4} sm={6} xs={12}>
                                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                                        img={CourseImg}
                                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                                    />
                                </Col>
                                <Col xl={4} sm={6} xs={12}>
                                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                                        img={CourseImg}
                                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                </div>
                <Footer />
            </div>
        </>
    )
}

export default CourseFilter