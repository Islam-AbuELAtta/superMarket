import axios from "axios";

let baseUrl = `https://ecommerce.routemisr.com/api/v1`
let token = localStorage.getItem('userToken')


export function addToCart(productId) {

    return axios.post(`${baseUrl}/cart`, { productId }, {
        headers: {
            token
        }
    })
}

// get all customer cart product 

export function getCustomerApi() {

    return axios.get(`${baseUrl}/cart`, {
        headers: {
            token
        }
    })
}


// remove one item from cart 


export function delProduct(productID) {
    return axios.delete(`${baseUrl}/cart/${productID}`, {
        headers: {
            token
        }
    })
}
// remove one item from cart 


export function ClrCart(){

    return axios.delete(`${baseUrl}/cart`, {
        headers : {
            token
        }
    })
}

// Update one item from cart 


export function UpProduct({ productID, count }) {
    return axios.put(`${baseUrl}/cart/${productID}`, { count }, {
        headers: {
            token
        }
    })
}




