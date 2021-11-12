import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

const AccessoriesItemForm = props => {


  const submitHandler = event => {
    event.preventDefault();

    props.onAddToCart( 1, props.item);
  };

  return (
    <form onSubmit={submitHandler}>
      <button className="btn btn-danger">
        <MdOutlineShoppingCart /> Add To Cart</button>
    </form>
  )
}

export default AccessoriesItemForm;