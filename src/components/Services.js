import classes from '../styles/Services.module.css'
import banking from '../images/icon-online.svg';
import budgeting from '../images/icon-budgeting.svg';
import boarding from '../images/icon-onboarding.svg';
import api from '../images/icon-api.svg';

function Services() {
    return (
        <div className={classes.bg}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Why Choose Easybank?</h2>
                    <p>We leverage Open banking to turn your bank account into your financial hub. control your finances like never before.</p>
                </div>
                <div className={classes.services}>
                    <div className={classes.service_section}>
                        <img src={banking} alt="online banking" />
                        <h4>Online Banking</h4>
                        <p>Our modern we and mobile applications allow you to keep track of your finances whenever you are in the world</p>
                    </div>
                    <div className={classes.service_section}>
                        <img src={budgeting} alt="simple budgeting" />
                        <h4>Simple Budgeting</h4>
                        <p>See exactly where your money goes each month. Receiv notifications when you`re close to hitting your limits.</p>
                    </div>
                    <div className={classes.service_section}>
                        <img src={boarding} alt="fast boarding" />
                        <h4>Fast Onboarding</h4>
                        <p>We don`t do branches.Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div className={classes.service_section}>
                        <img src={api} alt="Open API" />
                        <h4>Open API</h4>
                        <p>Manage your savings , investments, pension and much more from one account.Tracking your money neve been easier. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;