// components
import CourseBox from '../CourseBox/CourseBox'

// bootstrap
import { Row, Col } from 'react-bootstrap'

// images
import CourseImg from '../../Assets/images/course.png'

export default function DashboardCorses() {
    return (
        <div className='DashboardCorses'>
            <Row className='mt-3 row-gap-4'>
                <Col lg={4} sm={6} xs={12}>
                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                        img={CourseImg}
                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                    />
                </Col>
                <Col lg={4} sm={6} xs={12}>
                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                        img={CourseImg}
                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                    />
                </Col>
                <Col lg={4} sm={6} xs={12}>
                    <CourseBox title="آموزش پروژه محور NestJS از صفر!"
                        img={CourseImg}
                        subtitle="NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر..."
                        teacher="حمیدرضا عبادی" point={5.0} mainPrice={90000000} offPrice={5600000} users={867}
                    />
                </Col>
            </Row>
        </div>
    )
}
