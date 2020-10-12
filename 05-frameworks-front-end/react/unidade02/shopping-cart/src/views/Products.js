import React, { Component } from 'react';
import { ProductsAPI } from '../api/ProductsAPI';
import { ProductItem } from '../components/ProductItem';
import './Products.css';

export class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    async componentWillMount() {
        const { products } = await ProductsAPI.getProducts();

        this.setState({ products });
    }

    render() {
        return (
            <ul className="products-list">
                {this.state.products.map((product) => <ProductItem product={product} />)}
            </ul>
        );
    }
}