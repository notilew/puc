import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/index';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.products.map((product) => (
                        <li key={product.id}>
                            <img src={require(`../assets/img/${product.image}`)} alt={product.name} width="100" height="100" />
                            <h3>{product.name}</h3>
                            <span>{product.price}</span>
                            <button onClick={() => this.props.removeFromCart(product)}>Remove From Cart</button>
                        </li>
                    ))}
                </ul>

                <p>
                    <strong>Amount:</strong> R${this.props.products.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0).toFixed(2)}
                </p>
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => ({
    products: cart.products
});

export const CartRedux = connect(
    mapStateToProps,
    { removeFromCart }
)(Cart);