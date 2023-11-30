import facebook from '../images/icon-facebook.svg';
import youtube from '../images/icon-youtube.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';
import logo from '../images/logo-white.svg'
import classes from '../styles/Footer.module.css'



function Footer() {

    return (
        <div className={classes.bg}>
            <div className={classes.container}>
                <div className={classes.soc_icons_and_links}>
                    <div className={classes.soc_icons}>
                        <img src={logo} alt="easybank" />
                        <div className={classes.icons}>
                            <a href="https://facebook.com">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="https://youtube.com">
                                <img src={youtube} alt="youtube" />
                            </a>
                            <a href="https://twitter.com">
                                <img src={twitter} alt="twitter" />
                            </a>
                            <a href="https://pinterest.com">
                                <img src={pinterest} alt="pinterest" />
                            </a>
                            <a href="https://instagram.com">
                                <img src={instagram} alt="instagram" />
                            </a>
                        </div>

                    </div>
                    <div className={classes.links}>
                        <ul>
                            <li>
                                <a href="/#">About Us</a>
                            </li>
                            <li>
                                <a href="/#">Contact</a>
                            </li>
                            <li>
                                <a href="/#">Blog</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/#">Careers</a>
                            </li>
                            <li>
                                <a href="/#">Support</a>
                            </li>
                            <li>
                                <a href="/#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.btn_section}>
                    <button className={classes.req_btn}>Request Invite</button>
                    <span>© Easybank. All rights Reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;