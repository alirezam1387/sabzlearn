// components
import Header from '../Components/Header/Header'
import DiscountOffer from '../Components/DiscountOffer/DiscountOffer'

// bootstrap
import { Row, Col } from 'react-bootstrap'

// images
import courseImg from '../Assets/images/course.png'

function CoursePage() {
    return (
        <div className='course-page p-3'>
            <Header />
            <div className="topbar container-md container-fluid w-100 mt-200 p-4">
                <Row className='row-gap-3'>
                    <Col xs={12} className="d-lg-none bg-black p-0 top-img-responsive">
                        <img src={courseImg} alt="course img" className='w-100 object-fit-cover' />
                    </Col>
                    <Col lg={6} xs={12} className="right ">
                        <h3 className='title'>آموزش پروژه محور NestJS از صفر!</h3>
                        <p className='info mt-4'>
                            NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر Node.js هست. نست بر پایه الگوی معماری ماژولار پیاده سازی شده و میتونیم باهاش برنامه‌هایی با خوانایی بسیار بالا بسازیم
                        </p>
                        <DiscountOffer />
                        <div className='bottom-div mt-5 d-sm-flex d-block w-100 align-items-center justify-content-between'>
                            <div className='d-flex gap-3 justify-content-between'>
                                <span className='off-price'>1,999,000</span>
                                <span className='price'>999,500</span>
                            </div>
                            <button className='start-btn rounded-pill mt-2'>افزودن به سبد خرید</button>
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className="d-lg-block d-none">
                        <img src={courseImg} alt="course img" className='w-100 object-fit-cover' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CoursePage
