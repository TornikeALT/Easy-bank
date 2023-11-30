import '../index.css';
import classes from '../styles/DigitalBanking.module.css';
import bgintro from '../images/bg-intro-desktop.svg';
import mobiles from '../images/image-mockups.png'

function DigitalBanking() {
    return (
        <div className={classes.digital_banking}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.content}>
                        <h3>
                            Next generation digital banking
                        </h3>
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop fro spending, saving, budgeting, investing, and much more</p>
                        <button>Request Invite</button>
                    </div>
                    <div className={classes.mobile_images}>
                        <img src={bgintro} alt="background" className={classes.bgintro} />
                        <img src={mobiles} alt="mobiles" className={classes.bgmobile} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DigitalBanking;