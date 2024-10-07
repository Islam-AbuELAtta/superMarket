import axios from "axios";


            export function getBrandApi(){
               return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
            }