import { useState } from 'react';

import AvailableAccessories from './components/Accessories/AvailableAccessories';
import Header  from './components/Layout/Header';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <div>
      {/* to render component conditionally cause I want to wrap in
      curly braces to evaluate dynamic expressions
        */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <AvailableAccessories />
    </div>
  );
}

export default App;
