import { ADD_PRODUCT } from "../Types/Types"

const productState = {
    products:['Apple','Mango','Banana']
}

export const productReducer = (state=productState,action) =>{
    console.log('productReducer action=> ',action, state)
    switch(action.type){
        case ADD_PRODUCT:{
            return {
                ...state, products: [...state.products, action.data]
            }
        }
        default: return state;;
    }
}