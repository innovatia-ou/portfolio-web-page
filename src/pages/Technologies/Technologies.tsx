import { DefaultIcon } from '../../components/DefaultIcon/DefaultIcon'
import { VerticalTitle } from '../../components/verticalTitle/VerticalTitle'
import './Technologies.scss'



const technologies = [
    {label:"HTML", src:'images/bg_html.jpeg'},
    {label:"CSS", src:'images/bg_css.jpeg'},
    {label:"Javascript", src:'images/bg_javascript.jpeg'},
    {label:"Typescript", src:'images/bg_typescript.jpeg'},
    {label:"Python", src:'images/bg_python.jpeg'},
    {label:"Next JS", src:'images/bg_next.jpeg'},
    {label:"React JS", src:'images/bg_react.jpeg'},
    {label:"Node JS", src:'images/bg_node.jpeg'},
    {label:"Redux", src:'images/bg_redux.jpeg'},
    {label:"Bootstrap", src:'images/bg_bootstrap.jpeg'},
    {label:"Tailwind", src:'images/bg_tailwind.jpeg'},
    {label:"Jest", src:'images/bg_jest.jpeg'},
    {label:"Testing Library", src:'images/bg_testing_library.jpeg'},
    {label:"Figma", src:'images/bg_figma.jpeg'},
    {label:"Adobe XD", src:'images/bg_adobe-xd.jpeg'},
]

export const Technologies = () => {
    return (
        <main id="technologies">
            <div className='vertical-title-container'>
                <VerticalTitle name='Technologies' size={6}/>
            </div>
            <div className='technologies-content'>
                {technologies.map( ({label, src}) => (
                    <div key={src} className="icon">
                        <DefaultIcon  label={label} src={src} />
                    </div>
                ))}
            </div>
        </main>
    )
}