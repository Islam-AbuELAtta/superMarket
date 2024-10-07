import axios from "axios";

            // geting featured product 

    export function getFeaturedProduct(){
                return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }
    
            // geting product details 

    export async function getSpecifiProduct(prodId){

            return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${prodId}`)
    }