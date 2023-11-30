import classes from '../styles/Articles.module.css'
import currency from '../images/image-currency.jpg';
import restaurant from '../images/image-restaurant.jpg';
import plane from '../images/image-plane.jpg';
import confetti from '../images/image-confetti.jpg'

function Articles() {
    return (
        <div className={classes.bg}>
            <div className='container'>
                <h2 className={classes.title}>Latest Articles</h2>
                <div className={classes.content}>
                    <div className={classes.article}>
                        <img src={currency} alt="money" />
                        <div className={classes.info}>
                            <span>By Claire Robinson</span>
                            <h4>Receive Money in any currency with no fees</h4>
                            <p>The world is getting smaller and we`re becoming more mobile.So why should you be forced to only receive money in a single...</p>
                        </div>
                    </div>
                    <div className={classes.article}>
                        <img src={restaurant} alt="restaurant" />
                        <div className={classes.info}>
                            <span>By Wilson  Hutton</span>
                            <h4>Treat yourself without worrying about money</h4>
                            <p>Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you...</p>
                        </div>
                    </div>
                    <div className={classes.article}>
                        <img src={plane} alt="restaurant" />
                        <div className={classes.info}>
                            <span>By Wilson  Hutton</span>
                            <h4>Take your Easybank card wherever you go</h4>
                            <p>We want you to enjoy your travles. This is why we don`t charge any fees on purchases while you`re abroad. We`ll even show you ...</p>
                        </div>
                    </div>
                    <div className={classes.article}>
                        <img src={confetti} alt="confetti" />
                        <div className={classes.info}>
                            <span>By Claire Robinson</span>
                            <h4>Our invite-only Beta accounts are now live!</h4>
                            <p>After a lot of hard work by the whole team , we`re excited to launch our closed beta. It`s easy to request an invite through the site</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Articles;