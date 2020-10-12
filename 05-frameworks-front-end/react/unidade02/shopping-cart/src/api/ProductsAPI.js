import products from './products.json';

export class ProductsAPI {
    static getProducts() {
        return new Promise((resolve, reject) => {
            if (products) {
                resolve(products);
            } else {
                reject('Products not found!');
            }
        });
    }

    static getProductById(id) {
        return new Promise((resolve, reject) => {
            const product = products.products.find((product) => product.id === parseInt(id));

            if (product) {
                resolve(product);
            } else {
                reject('Product not found!');
            }
        });
    }
}