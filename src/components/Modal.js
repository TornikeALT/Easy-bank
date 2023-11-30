import classes from '../styles/Modal.module.css'

function Modal() {
    return (
        <div className={classes.modal_overlay}>
            <ul className={classes.content}>
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="/#">About</a>
                </li>
                <li>
                    <a href="/#">Contact</a>
                </li>
                <li>
                    <a href="/#">Blog</a>
                </li>
                <li>
                    <a href="/#">Careers</a>
                </li>
            </ul>
        </div>
    );
}

export default Modal;