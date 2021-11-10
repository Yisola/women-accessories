import Carousel from 'react-bootstrap/Carousel';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {
    return (
        <div>
            <header className={classes.header}>
                <h3>Women Accessories Store</h3>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>

            <Carousel>
                <Carousel.Item>
                    <img
                        className={`d-block w-100 ${classes['carousel-img']}`}
                        src="https://clarkdeals.com/wp-content/uploads/2019/08/s-l1600-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className={`${classes['carousel-caption']} d-none d-md-block`}>
                        <h3>CLASSY MAKE UP KIT</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={`d-block w-100 ${classes['carousel-img']}`}
                        src="https://smartstyletoday.com/wp-content/uploads/2018/09/makeup-kit.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className={`${classes['carousel-caption']} d-none d-md-block`}>
                        <h3>MAKE UP KIT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className={`container-fluid offer pt-3 pb-3 ${classes['bg-orange']} d-none d-md-block`}>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-4 ${classes['m-right']}`}>
                            <h4>FREE DELIVERY</h4>
                            <p>on order over #40,000</p>
                        </div>
                        <div className={`col-md-4 ${classes['m-right']}`}>
                            <h4>CALL US AT ANYTIME</h4>
                            <p>+234 8133333333</p>
                        </div>
                        <div className="col-md-4">
                            <h4>OUR LOCATION</h4>
                            <p>Lagos, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;