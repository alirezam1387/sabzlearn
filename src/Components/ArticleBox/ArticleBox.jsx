import { useState } from 'react';

// components
import Loader from '../Loader/Loader'

// icons
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaCircleArrowLeft } from "react-icons/fa6";

// images
import ArticleImg from '../../Assets/images/article.jpg'

// css
import './ArticleBox.css'

export default function ArticleBox() {

  const [isImgLoaded, setIsImgLoaded] = useState(false)

  return (
    <div className='article-box' data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
      <div className="img-box">
        {!isImgLoaded && <Loader />}
        <img src="https://opengraph.githubassets.com/0e4c93825ad5e400e2bafd330a7edb1208466d76c224e10dcce0485bbb987007/jaredpalmer/formik/issues/2768" alt=""
        onLoad={() => setIsImgLoaded(true)} />
      </div>
      <div className="info">
        <a href="#" className="title">نکات مهم برای ساخت یک رزومه قوی در برنامه‌نویسی</a>
        <p className="subtitle">
          رزومه اولین برخورد شما با کارفرماست؛ فرصتی که نشان دهید چه مهارت‌هایی دارید و چرا شما بهترین گزینه برای شغل مورد نظر هستید. برای برنامه‌نویسان، داشتن یک رزومه قوی از…
        </p>
        <div className="footer-info">
          <div className="writer">
            <FaRegUser />
            <span>شقایق ستیه نیا</span>
          </div>
          <div className="date">
            <span>1403/05/27</span>
            <SlCalender />
          </div>
        </div>
        <hr />
      </div>
      <a href="#" className="read-more">
        <span>مطالعه مقاله</span>
        <FaCircleArrowLeft />
      </a>
    </div>
  )
}
