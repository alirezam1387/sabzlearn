// componetns
import TitleBox from '../TitleBox/TitleBox'
import AbilitiBox from '../AbilityBox/AbilityBox'

// icon
import { IoMdBook } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import { IoBarChartOutline } from "react-icons/io5";


// bootstrap
import { Col, Row } from 'react-bootstrap'

export default function Abilities() {
    return (
        <div className='mt-100'>
            <TitleBox slot="container-start"
                title="ما چه کمکی میتونیم بهت بکنیم"
                subTitle="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
                color="#0EA5E9" />
            <Row className='row-gap-4'>
                <Col md={6} xs={12}>
                    <AbilitiBox title="پشتیبانی دائمی"
                        subtitle="هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی."
                        icon={<CiChat1 />}
                        color="#F4BA25" />
                </Col>

                <Col md={6} xs={12}>
                    <AbilitiBox title="پروژه محور در راستای بازار کار"
                        subtitle="کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد."
                        icon={<IoBarChartOutline />}
                        color="#0EA5E9" />
                </Col>

                <Col md={6} xs={12}>
                    <AbilitiBox title="سراغ حرفه ای ها رفتیم"
                        subtitle="به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید."
                        icon={<IoMdBook />}
                        color="#EF4444" />
                </Col>

                <Col md={6} xs={12}>
                    <AbilitiBox title="تضمین کاملترین محتوا"
                        subtitle="بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."
                        icon={<IoMdBook />}
                        color="#22B159" />
                </Col>
            </Row>
        </div>
    )
}
