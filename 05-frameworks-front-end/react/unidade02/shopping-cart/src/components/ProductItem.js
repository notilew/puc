import React from 'react';
import { Link } from 'react-router-dom';

export const ProductItem = ({ product }) => {
    return (
        <li className="product-item" key={product.id}>
            <img src={require(`../assets/img/${product.image}`)} alt={product.name} />
            <h3>{product.name}</h3>
            <span className="product-price">
                <strong>Price: {product.price}</strong>
            </span>

            <p>
                <Link to={`/product/${product.id}`}>Details</Link>
            </p>
        </li>
    );
};