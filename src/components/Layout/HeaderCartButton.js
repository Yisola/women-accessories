import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    return (
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            {/* imported cartIcon from cart icon component */}
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
    ) 
};

export default HeaderCartButton;