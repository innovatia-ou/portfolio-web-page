import './VerticalTitle.scss'

interface VerticalTitleProps {
    name:string;
    size?:number
}

export const VerticalTitle = ({name, size=6}:VerticalTitleProps) => {


    return (
        <div id='vertical-title'>
            <h2 style={{fontSize:`${size}rem`, width:`${size}rem`}} className={`vertical-title-name`}>{name}</h2>
        </div>
    )
}