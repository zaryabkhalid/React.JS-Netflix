import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {


    const [handle, sethandle] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                sethandle(true);
            } else sethandle(false);
        });
        return () => {
            window.addEventListener('scroll');
        }
    }, [])


    return (
        <>
            <div className={`nav ${handle && "nav__black"}`}>
                <div className='nav_left'>
                    <img className='nav__logo' src={require('./logo/netflix-logo.png').default} alt='Netflix' />

                    <ul className='nav_links'>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>Tv Serials</li>
                        <li>My List</li>
                        <li>New&Popular</li>
                    </ul>
                </div>

                <img className='nav__profile' src={require('./logo/profile-image.png').default} alt='Netflix' />

            </div>
        </>
    )
}

export default Nav
