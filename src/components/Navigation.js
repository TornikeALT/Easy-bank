import mainlogo from '../images/logo.svg';
import classes from '../styles/Navigation.module.css';
import hamburger from '../images/icon-hamburger.svg';
import closeBtn from '../images/icon-close.svg'
import Modal from './Modal';
import { useEffect, useState } from 'react';

function Navigation() {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => {
        setShowModal(!showModal)
    }
    // SCROLL PREVENT WHEN MODAL IS OPEN
    useEffect(() => {
        const handleScrollPrevent = () => {
            document.body.style.overflow = showModal ? 'hidden' : ''
        }

        handleScrollPrevent();

        window.addEventListener('scroll', handleScrollPrevent);

        return () => [
            window.removeEventListener('scroll', handleScrollPrevent)
        ]
    }, [showModal])
    // 
    return (
        <header className={classes.header}>
            <a href="/#">
                <img src={mainlogo} alt="main logo" />
            </a>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <a href="/#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            Careers
                        </a>
                    </li>
                </ul>
            </nav>
            <button>Request Invite</button>
            {!showModal && <img src={hamburger} alt='hamburger' className={classes.hamburger} onClick={handleModalShow} />}
            {showModal && <img src={closeBtn} onClick={handleModalShow} className={classes.hamburger} alt='close' />}
            {showModal && <Modal />}
        </header>
    );
}

export default Navigation;