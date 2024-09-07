// components
import ArticleBox from '../ArticleBox/ArticleBox'
import TitleBox from '../TitleBox/TitleBox'
import ShadowBox from "../ShadowBox/ShadowBox";

// icons
import { FaArrowLeft } from "react-icons/fa";

// bootstrap
import { Row, Col } from 'react-bootstrap'

// css
import './Articles.css'

export default function Articles() {
    return (
        <Row className='row-gap-4 mt-100 position-relative'>
            <ShadowBox width="500px" height="500px" color='#7B1FA2' top='-200px' right='-100px' />
            <TitleBox title="وبلاگ آموزشی سبزلرن" subTitle="مقالات بروز برنامه نویسی" color="#EF4444" isLeft>
                <a href='#' className='see-all rounded-pill'>مشاهده همه مقالات<FaArrowLeft /></a>
            </TitleBox>
            <Col xl={3} lg={4} sm={6} xs={12}>
                <ArticleBox />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12}>
                <ArticleBox />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12}>
                <ArticleBox />
            </Col>
            <Col xl={3} lg={4} sm={6} xs={12}>
                <ArticleBox />
            </Col>
        </Row>
    )
}
