import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';


const ProductCard = ({product}) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <div className="productCard-img-div">
        <img src={product.images[0].url} alt={product.name} />
      </div>
      <div className="productCard-details-div">
        <p>{product.name}</p>
        <div>
          <Rating {...options} />
          <span> ({product.numOfReviews} Reviews) </span>
        </div>
        <span>{`₹${product.price}`}</span>
      </div>
    </Link>
  );
}

export default ProductCard;