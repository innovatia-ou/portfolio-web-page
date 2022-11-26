import { useEffect } from 'react';
import { ProjectItem, ProjectItemProps } from '../../components/ProjectItem/ProjectItem';
import { VerticalTitle } from '../../components/verticalTitle/VerticalTitle'
import './Projects.scss'


const projects = [
    // {title:'Company A', src:'images/project_example.png'}
] as ProjectItemProps[]

export const Projects = () => {

    return (
        <main id='projects'>
            <div className='projects-left-side'>
                <VerticalTitle name='PROJECTS' size={10} />
            </div>
            <div className='projects-right-side'>
                {projects.length > 0 ? projects.map( project => (
                    <div className='project-item-container'>
                        <ProjectItem title={project.title} src={project.src} />
                    </div>
                )) : (
                    <div className='empty-message-container'>
                        <p className='empty-message' >Projects on Development</p>
                        <div>
                            <iframe src='https://cdn.htmlgames.com/Free-cell/' />
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}