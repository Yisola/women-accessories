import { useContext } from 'react';
import AccessoriesItemForm from './AccessoriesItem/AccessoriesItemForm';
import classes from './AvailableAccessories.module.css';
import CartContext from '../../store/cart-context';



const DUMMY_ACCESSORIES = [
    {
        id: '1',
        brand: 'Ayanfe Collection',
        price: 7000,
        img: "https://i.pinimg.com/originals/05/03/48/050348e0decd3f22cb17b5fd8c06cdaf.jpg"
    },
    {
        id: '2',
        brand: 'Beckly Cols',
        price: 23000,
        img: 'https://images-na.ssl-images-amazon.com/images/I/71nX0Ac3zrL._SL1000_.jpg'
    },
    {
        id: '3',
        brand: 'Diwura Hair',
        price: 40000,
        img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/o/Body-Wave-Weavon-Closure-by-Angees-Locks---14--6595198_2.jpg'
    },
    {
        id: '4',
        brand: 'Da Best Wrist',
        price: 15000,
        img: 'https://staticimg.titan.co.in/Titan/Catalog/2480SM02_2.jpg'
    }
]

const AvailableAccessories = () => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount, item) => {
        cartCtx.addItem({
            id: item.id,
            brand: item.brand,
            amount: amount,
            price: item.price
        });
    };

    return (
        <section className={`container-fluid ${classes['bg-light-gray']}`}>
            <div className="container pt-5">
                <div className="row">
                    <h3>Accesories Category</h3>
                </div>
                <div className={classes.underline}></div>
            </div>


            <div className="container mt-5">
                <div className="row">
                    {DUMMY_ACCESSORIES.map((d) => (
                        <div className=" col-md-3">
                            <div className="card">
                                <img src={d.img} alt="" className={`card-img-top ${classes['kit-img']}`} />
                                <div className="card-body text-center">
                                    <h5>{d.brand}</h5>
                                    <h5>₦{d.price.toFixed(2)}</h5>
                                    {/* <button class="btn btn-danger"><MdOutlineShoppingCart /> Add To Cart</button> */}
                                    <AccessoriesItemForm onAddToCart={addToCartHandler} item={d} />



                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
};

export default AvailableAccessories;