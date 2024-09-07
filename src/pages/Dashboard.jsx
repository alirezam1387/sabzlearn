// components
import { DashboardSidebar } from '../Components/DashboardSidebar/DashboardSidebar'
import WelcomeBox from '../Components/WelcomeBox/WelcomeBox'
import DashboardResponsive from '../Components/DashboardResponsive/DashboardResponsive'
import DashboardTopbar from '../Components/DashboardTopbar/DashboardTopbar'

// router
import { Outlet } from 'react-router-dom'

// bootstrap
import { Row, Col } from 'react-bootstrap'

export default function Dashboard() {
    return (
        <>
            <div className='dashboard overflow-x-hidden min-h-100'>
            <DashboardTopbar />
                <Row className='container-lg container-fluid m-auto'>
                    <Col lg={3} className='d-none d-lg-block'>
                        <DashboardSidebar />
                    </Col>
                    <Col lg={9} xs={12} className='data-div-box'>
                        <WelcomeBox name="علیرضا اقدم" />
                        <Outlet />
                    </Col>
                </Row>
            </div>
            <DashboardResponsive />
        </>
    )
}
