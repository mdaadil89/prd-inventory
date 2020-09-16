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

        static getProduct(id){

            let url = `http://localhost:4000/products/`+id.id 

            return axios.get(url)
              .then(res => {
                  return res.data
              })
        }

        static editProduct(product, id){
            
            let url = `http://localhost:4000/products/`+id
            return axios.put(url,product).then(res =>{
                console.log("Editted Item", res.data)
                return res.data
            })
        }


       
        static  deleteItem(id) {
            const endpoint = `http://localhost:4000/products/`+id.id
            return axios.delete(endpoint);
        }
}