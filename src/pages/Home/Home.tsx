import { Button } from '../../components/button/Button'
import './Home.scss'
import HomeImage from '../../assets/img/home-image.png'

export const Home = () => {

    return (
        <main id="home">
            <div className='left-side'>
                <h1 className='title'>We are Cypher Devs!</h1>
                <h2 className='subtitle'>Full Stack</h2>
                <h2 className='subtitle'>Developers</h2>
                <Button onClick={() => {}} >HIRE US</Button>
            </div>
            <div className='right-side'>
                <img src={HomeImage} />
            </div>

        </main>
    )
}