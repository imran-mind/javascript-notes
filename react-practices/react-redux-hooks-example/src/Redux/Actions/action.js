import {ADD_PRODUCT, INCREMENT} from '../Types/Types.js'

export const increment = (data) =>{
 return{
    type:INCREMENT,
    data: data
 }
}

export const addProduct = (data) =>{
   return{
      type: ADD_PRODUCT,
      data:data
   }
}