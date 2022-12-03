import './index.scss';
import AWhite from '../../assets/images/a-white.png';
import ARed from '../../assets/images/a-red.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import HomeLogo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] =  useState('text-animate') 
    const nameArray = ['l', 'e', 'x', ',']
    const jobArray1 = ['f', 'r', 'o', 'n', 't', 'e', 'n', 'd']
    const jobArray2 = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e']
    const jobArray3 = ['e', 'n', 'g', 'i', 'n', 'e', 'e', 'r']
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)  
    }, [])

    const completeAnimation = (e) => {
        e.target.classList.add('completeAnimation');
        setTimeout(() => {
            e.target.classList.remove('completeAnimation')
        }, 1000)
    }

    const swapImage = (e) => {
        e.target.src = ARed;
    }
    const restoreImage = (e) => {
        e.target.src = AWhite;
    }

    return (
        <div className='container home-page'>
            <div className='text-zone'>    
                <h1>
                    <span className={`${letterClass} _1`}  onMouseOver={completeAnimation}>H</span>
                    <span className={`${letterClass} _2`}  onMouseOver={completeAnimation}>i</span>
                    <span className={`${letterClass} _3`}  onMouseOver={completeAnimation}>,</span>
                    <br /> 
                    <span className={`${letterClass} _4`}  onMouseOver={completeAnimation}>I</span>
                    <span className={`${letterClass} _5`}  onMouseOver={completeAnimation}>'m</span>
                    <img onMouseEnter={swapImage} onMouseLeave={restoreImage} src={AWhite} alt='A for Alex' /><AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={9} /><br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray1} idx={15} /> {' '}
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={23} /> {' '}
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray3} idx={31} />
                </h1>
                <h2>Javascript Enthusiast / Certified Scrum Master</h2>
                <Link to='/contact' className='button'>Contact me</Link>
            </div>
            <HomeLogo />
        </div>
    );
}

export default Home;