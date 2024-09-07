// css
import './FormTitle.css'


export default function FormTitle({ title }) {
    return (
        <>
            <span className='form-title'>
                {title}
            </span>
            <hr />
        </>
    )
}
