// components
import TitleBox from '../TitleBox/TitleBox'
import WayBox from '../WayBox/WayBox'
import ShadowBox from "../ShadowBox/ShadowBox";

// icons
import { FaCode } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { LuPuzzle } from "react-icons/lu";


// bootstrap
import { Row, Col } from 'react-bootstrap'

export default function Way() {
    return (
        <div className='position-relative mt-100'>
            <ShadowBox width="500px" height="500px" color='#E53935' top='-200px' right='-100px' />
            <TitleBox color='#EF4444' title='نقشه راه ها' subTitle='نقشه های راه برای شروع اصولی یادگیری' />
            <Row className='row-gap-4'>
                <Col xl={3} xs={6}>
                    <WayBox title='فرانت اند' icon={<FaCode />} count={28} color='linear-gradient(90deg,#F54B52,#FEAB38)'/>
                </Col>

                <Col xl={3} xs={6}>
                    <WayBox title='امنیت' icon={<GrSecure />} count={28} color='linear-gradient(90deg, rgba(241,56,97,1), rgba(71,36,228,1))'/>
                </Col>

                <Col xl={3} xs={6}>
                    <WayBox title='پایتون' icon={<AiOutlinePython />} count={28} color='linear-gradient(90deg, rgba(241,56,218,1), rgba(71,36,228,1))'/>
                </Col>

                <Col xl={3} xs={6}>
                    <WayBox title='مهارت' icon={<LuPuzzle />} count={28} color='linear-gradient(90deg, rgba(97,241,56,1), rgba(111,225,224,1))'/>
                </Col>
            </Row>
            <ShadowBox width="500px" height="500px" color='#FFEB3B' top='250px' left='-200px' />
        </div>
    )
}
