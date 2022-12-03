import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faApple, faAndroid, faGit, faJira} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Profile from '../../assets/images/profile.png'
import './index.scss'

const About = () => {

    const [letterClass, setLetterClass] =  useState('text-animate') 
    const aboutArray = ['A', 'b', 'o', 'u', 't']
    const meArray = ['m', 'e']
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)  
    }, [])

    return (
        <div className="container about-page">
            <div className='text-zone'>
                <div className='flex'>
                <img src={Profile} alt='Profile' />
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={1} /> {' '}
                    <AnimatedLetters letterClass={letterClass} strArray={meArray} idx={6} />
                </h1>
                </div>
                <p>I have a creative streak and the ability to think outside the box. Blending technical coding with creative skills, perseverance is a must.</p>
                <p>Driven to be a effective communicator, a creative and critical thinker & a team player.</p>
                <p>Curiosity, compassion & collaboration influence my outcomes reacting to change.</p>
            </div>

            <div className='cube-container'>
                <div className='cube-spinner'>
                    <div className='cube-face cube-face-1'>
                        <h2>Curious</h2>
                    </div>
                    <div className='cube-face cube-face-2'>
                        <h2>Thinker</h2>
                    </div>
                    <div className='cube-face cube-face-3'>
                        <h2>Collaborator</h2>
                    </div>
                    <div className='cube-face cube-face-4'>
                        <h2>Effective</h2>
                    </div>
                    <div className='cube-face cube-face-5'>
                        <h2>Agile</h2>
                    </div>
                    <div className='cube-face cube-face-6'>
                        <h2>Creative</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About