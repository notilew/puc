import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index';
import { ProductsAPI } from '../api/ProductsAPI';

class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {}
        };
    }

    async componentWillMount() {
        const product = await ProductsAPI.getProductById(this.props.match.params.id);

        this.setState({ product });
    }

    render() {
        return (
            <div className="product-page">
                {this.state.product.image && <img src={require(`../assets/img/${this.state.product.image}`)} alt={this.state.product.name} />}
                <h3>{this.state.product.name}</h3>
                <span className="product-price">
                    <strong>Price: R${this.state.product.price}</strong>
                </span>
                <p>{this.state.product.description}</p>
                <button onClick={() => this.props.addToCart(this.state.product)}>Add to Cart</button>

                <p>
                    <Link to="/cart">View Cart</Link>
                </p>
            </div>
        );
    }
}

export const ProductDetailsRedux = connect(
    undefined,
    { addToCart }
)(ProductDetails);