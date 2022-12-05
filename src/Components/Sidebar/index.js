import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'

const Sidebar = () => {
    const [navIsOpen, setNavIsOpen] = useState(false)
    useEffect(() => {
        const handleClick = (event) => {
            if (navIsOpen) {
                setNavIsOpen(false)
            }
          };
        document.addEventListener('click', handleClick, true);
        return () => {
          document.removeEventListener('click', handleClick, true);
        };
    }, [navIsOpen])

    return (
        <div className='sidebar'>
            <div onClick={() => {setNavIsOpen(!navIsOpen)}} className={`mobile-menu ${navIsOpen ? 'close' : ''}`}>
                {navIsOpen ? '' : <FontAwesomeIcon icon={faBars} color="#4d4d4d" />}
            </div>
            <NavBar isMobile={navIsOpen}/>
        </div>
    )
}

export default Sidebar