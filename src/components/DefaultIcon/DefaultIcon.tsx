import './DefaultIcon.scss'

interface DefaultIconProps {
    src:string;
    label:string;

}

export const DefaultIcon = ({src, label}:DefaultIconProps) => {

    return (
        <div id="default-icon">
            <label className='image-container'>
                <img src={src} />
            </label>
            <p className='di-label'>{label}</p>
        </div>
    )
}