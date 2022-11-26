import './ProjectItem.scss'

export interface ProjectItemProps {
    title:string;
    src:string;
}

export const ProjectItem = ({title = '', src = ''}:ProjectItemProps) => {

    return (
        <div id='project-item'>
            <p className='pi-title'>{title}</p>
            <div className='pi-image' style={{backgroundImage:`url(${src})`}} >
                <div className='pi-image-filter'/>
            </div>    
        </div>
    )
}