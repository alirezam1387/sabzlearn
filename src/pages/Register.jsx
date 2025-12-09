// components
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"

// images
import logo from '../Assets/images/icon.png'

// formik
import { Formik, Form, Field, ErrorMessage } from "formik"

const initialValues = {
    'email': '',
    'username': '',
    'password': '',
    'confirm_password': '',
}

function Register() {

    return (
        <div className="overflow-x-hidden">
            <div className="container-md container-fluid">
                <div className="register-box">
                    <div className="w-100 d-flex justify-content-center">
                        <img src={logo} alt="logo" className="object-fit-cover w-50 m-auto" />
                    </div>
                    <div className="w-100 mt-3 register-form">
                        <h3 className="text-center mb-5">عضویت</h3>
                        <Formik initialValues={initialValues}>
                            <Form>
                                <div className="input-box">
                                    <Field name="email" id="email" type="email" placeholder="آدرس ایمیل" />
                                    <ErrorMessage name="email" component="p" />
                                </div>
                                <div className="input-box">
                                    <Field name="username" type="email" placeholder="نام کاربری" />
                                    <ErrorMessage name="username" component="p" />
                                </div>
                                <div className="input-box">
                                    <Field name="password" type="email" placeholder="کلمه عبور" />
                                    <ErrorMessage name="password" component="p" />
                                </div>
                                <div className="input-box">
                                    <Field name="confirm_password" type="email" placeholder="تکرار کلمه عبور" />
                                    <ErrorMessage name="confirm_password" component="p" />
                                </div>
                                <button type="submit" className="submit-btn rounded-pill w-100">ادامه</button>
                            </Form>
                        </Formik>
                    </div>
                    <p className="hint text-center mt-3">
                        با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات سبزلرن را پذیرفته اید.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Register
