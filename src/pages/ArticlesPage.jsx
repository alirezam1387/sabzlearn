import { useState } from "react"

// componetns
import Header from "../Components/Header/Header"
import TopFilter from "../Components/TopFilter/TopFilter"
import SideBarFilter from "../Components/SideBarFilter/SideBarFilter"
import TitleBox from "../Components/TitleBox/TitleBox"
import ArticleBox from '../Components/ArticleBox/ArticleBox'
import Footer from "../Components/Footer/Footer"
import FilterDiv from "../Components/FilterDiv/FilterDiv"
import ShadowBox from "../Components/ShadowBox/ShadowBox"

// bootstrap
import { Row, Col } from "react-bootstrap"

function ArticlesPage({ count }) {
    const [filterList] = useState([
        { id: 1, name: 'عادی', link: '#', isActive: true },
        { id: 2, name: 'جدید ترین', link: '#', isActive: false },
        { id: 3, name: 'قدیمی ترین', link: '#', isActive: false },
        { id: 4, name: 'پرنظر ها', link: '#', isActive: false },
    ])
    return (
        <>
            <FilterDiv items={filterList} />
            <div className="overflow-hidden">
                <Header />
                <div className="container-md container-fluid mt-200">
                    <ShadowBox color="#F44336" width="500px" height="500px" left={0} />
                    <TitleBox title="وبلاگ" color="#EF4444" isLeft>
                        <h3 className="count">
                            <span>{count}</span>
                            <span> مقاله </span>
                        </h3>
                    </TitleBox>
                    <Row className="mt-50">
                        <Col lg={3} xs={12}>
                            <SideBarFilter searchTitle="جستجو بین مقالات" />
                        </Col>
                        <Col className="mt-4 mt-lg-0" lg={9} xs={12}>
                            <TopFilter items={filterList} />

                            <Row className='row-gap-4 mt-50'>
                                <Col xl={4} sm={6} xs={12}>
                                    <ArticleBox />
                                </Col>
                                <Col xl={4} sm={6} xs={12}>
                                    <ArticleBox />
                                </Col>
                                <Col xl={4} sm={6} xs={12}>
                                    <ArticleBox />
                                </Col>
                                <Col xl={4} sm={6} xs={12}>
                                    <ArticleBox />
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

export default ArticlesPage