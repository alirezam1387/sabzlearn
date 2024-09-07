// components
import EditUserForm from '../Components/EditUserForm/EditUserForm'
import FormTitle from '../Components/FormTitle/FormTitle'
import ChangePassForm from '../Components/EditUserForm/ChangePassForm'

// bootstrap
import { Row, Col } from 'react-bootstrap'

export default function EditUserInfo() {
  return (
      <Row className='mt-4 row-gap-4'>
        <Col lg={8} xs={12}>
          <div className="form-box">
            <FormTitle title="جزییات حساب کاربری" />
            <EditUserForm btnText="ثبت اطلاعات" />
          </div>
        </Col>
        <Col lg={4}  xs={12}>
          <div className="form-box" style={{minHeight: "100%"}}>
            <FormTitle title="تغییر رمز عبور" />
            <ChangePassForm btnText="تغییر رمز عبور" />
          </div>
        </Col>
      </Row>
  )
}
