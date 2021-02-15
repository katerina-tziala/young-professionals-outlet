
const baseUrl = 'https://fakestoreapi.com';

export default class ProductsService {

    static fetchData(urlPart) {
        return fetch(`${baseUrl}${urlPart}`).then(response => response.json());
    }

    static getAllProducts() {
        return ProductsService.fetchData('/products');
    }

    static getProductById(productId) {
        return ProductsService.fetchData(`/products/${productId}`);
    }
};
