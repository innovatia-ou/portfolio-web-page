import './Title.scss'

interface TitleProps {
    name:string;
    type?: 'primary' | 'secondary'
}

export const Title = ({name, type='primary'}:TitleProps) => {

    return (
        <h3 className={`title-component ${type} `}>{name}</h3>
    )
}