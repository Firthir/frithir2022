import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser';
import TalleyValley from '../../assets/images/talley-valley.jpg'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] =  useState('text-animate') 
    const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't']
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)  
    }, [])

    const form = useRef();
    const [status, setStatus] = useState(null);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9bcg2yn', 'template_1fgzalw', form.current, '9N-ef4-4UYBYakbYL')
        .then((result) => {
            setStatus(result.text);
        }, (error) => {
            alert('Oops... ' + JSON.stringify(error));
        });
    };
    const position = [-28.216970, 153.321947]
    return (
        <div className="container contact-page flex">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={contactArray} idx={1} /> {' '}
                </h1>
                {status === 'OK' && <p>Thanks for reaching out, I'll be in touch.</p>}
                {!status && (
                    <>
                    <p>Lets make something awesome together.</p>
                    <p>To get the conversation started, tell me a bit about yourself and what project your working on?</p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='form-button' value='Send' />
                                </li>
                            </ul>
                        </form>
                        </div>
                    </>
                )}
                
            </div>
            
            <div className='map-zone'>
            
                <div className='map-wrap'>
                <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup >
                        <img src={TalleyValley} alt='Talley valley' />
                        <h3>At the end of <br/> the road</h3>
                    </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
            

        </div>
    )
}
export default Contact