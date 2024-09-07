import { useReducer } from 'react'

// icons
import { FaEye, FaEyeSlash } from 'react-icons/fa'

// css
import './EditUserForm.css'

// formik
import { Formik, Form, Field, ErrorMessage } from 'formik'

let initialValues = {
    mainPass: '',
    newPass: ''
}

const validate = values => {
    let errors = {}

    // mainPass
    if (!values.mainPass) {
        errors.mainPass = "لطفا رمز عبور فعلی خود را وارد کنید"
    }

    // newPass

    if (!values.newPass) {
        errors.newPass = "لطفا رمز عبور جدید خود را وارد کنید"
    } else if (values.newPass.length < 8) {
        errors.newPass = "رمز عبور جدید حداقل باید 8 کارکتر داشته باشد"
    }

    return errors
}

const onSubmit = values => {
    console.log('done =>', values);
}

// 
const EyeChanger = (state, action) => {
    switch (action.type) {
        case "MAINPASS": {
            return {
                ...state,
                mainPassStatus: !state.mainPassStatus
            }
        }
        case "NEWPASS": {
            return {
                ...state,
                newPassStatus: !state.newPassStatus
            }
        }
        default : {
            return state
        }
    }
}

export default function ChangePassForm({ btnText }) {

    const [eyeStatus, dispatch] = useReducer(EyeChanger, { mainPassStatus: false, newPassStatus: false })

    return (
        <Formik className="changePass"
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}>
            <Form>
                <div className='input-box'>
                    <div className='eye-pass'>
                        <label htmlFor="mainPass">رمز عبور فعلی</label>
                        <div className="icon-box" onClick={() => dispatch({ type: "MAINPASS" })}>
                            {eyeStatus.mainPassStatus ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    <div>
                        <Field name="mainPass" id="mainPass" type={eyeStatus.mainPassStatus ? 'text' : 'password'} />
                        <ErrorMessage name='mainPass' component="p" />
                    </div>
                </div>
                <a href='#' className='forgot-pass'>رمز عبور را فراموش کرده اید؟</a>
                <div className='input-box'>
                    <div className='eye-pass'>
                        <label htmlFor="newPass">رمز عبور جدید</label>
                        <div className="icon-box" onClick={() => dispatch({ type: "NEWPASS" })}>
                            {eyeStatus.newPassStatus ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    <div>
                        <Field name="newPass" id="newPass" type={eyeStatus.newPassStatus ? 'text' : 'password'} />
                        <ErrorMessage name='newPass' component="p" />
                    </div>
                </div>
                <button type='submit' className='submit-btn'>{btnText}</button>
            </Form>
        </Formik>
    )
}
