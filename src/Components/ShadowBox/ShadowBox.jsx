// css
import './ShadowBox.css'


export default function ShadowBox({ color, width, height, top = null, right = null, left = null, bottom = null }) {
    return (
        <div className='shadow-box' style={{
            width: width,
            height: height,
            background: color,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            boxShadow: '`'
        }}></div>
    )
}
