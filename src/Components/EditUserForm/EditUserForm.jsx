// bootstrap
import { Row, Col } from 'react-bootstrap'

// css
import './EditUserForm.css'

// formik
import { Formik, Form, Field, ErrorMessage } from 'formik'
import validator from 'validator'




let validate = (values) => {
    let errors = {}

    // name field
    if (!values.name) {
        errors.name = "لطفا نام خود را وارد کنید"
    }

    // lname field
    if (!values.lname) {
        errors.lname = "لطفا نام خانوادگی خود را وارد کنید"
    }

    // username field
    if (!values.username) {
        errors.username = "لطفا نام کاربری خود را وارد کنید"
    }

    // email field
    if (!values.email) {
        errors.email = "لطفا ایمیل خود را وارد کنید"
    } else if (!validator.isEmail(values.email)) {
        errors.email = "لطفا ایمیل واقعی وارد کنید"
    }

    return errors
}

let onSubmit = (values) => {
    console.log('done =>', values)
}

export default function EditUserForm({ btnText }) {
    const initialValues = {
        name: "علیرضا",
        lname: "اقدم",
        username: "",
        email: "",
        lastLogin: "12122",
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {formik => (
                    <Form>
                        <Row className='row-gap-4'>
                            <Col lg={6} xs={12}>
                                <div className="input-box">
                                    <label htmlFor="name">نام</label>
                                    <div>
                                        <Field name="name" id="name" type="text" />
                                        <ErrorMessage name='name' component="p" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} xs={12}>
                                <div className="input-box">
                                    <label htmlFor="lname">نام خانوادگی</label>
                                    <div>
                                        <Field name="lname" id="lname" type="text" />
                                        <ErrorMessage name='lname' component="p" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} xs={12}>
                                <div className="input-box">
                                    <label htmlFor="username">نام کاربری</label>
                                    <div>
                                        <Field name="username" id="username" type="text" />
                                        <ErrorMessage name='username' component="p" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} xs={12}>
                                <div className="input-box">
                                    <label htmlFor="email">ایمیل</label>
                                    <div>
                                        <Field name="email" id="email" type="email" />
                                        <ErrorMessage name='email' component="p" />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="input-box">
                                    <label htmlFor="lastLogin">اخرین بار ورود به اکانت</label>
                                    <div>
                                        <Field name="lastLogin" disabled id="lastLogin" type="text" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <button type='submit' className='submit-btn'>{btnText}</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
