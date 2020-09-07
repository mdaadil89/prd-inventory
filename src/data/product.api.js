import axios from 'axios';

export default class ProductApi {
        static getAllProducts(){
            return axios.get("http://localhost:4000/products")
            .then(res => res.data);
        }

        static addProduct(product) {

            return axios.post('http://localhost:4000/products',product)
             .then(res => res.data)
           }
}