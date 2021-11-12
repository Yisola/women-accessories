import { useState } from 'react';

import AvailableAccessories from './components/Accessories/AvailableAccessories';
import Header  from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {/* to render component conditionally cause I want to wrap in
      curly braces to evaluate dynamic expressions
        */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <AvailableAccessories />
    </CartProvider>
  );
}

export default App;
