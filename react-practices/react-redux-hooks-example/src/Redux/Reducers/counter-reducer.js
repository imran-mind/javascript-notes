import {ADD, INCREMENT} from '../Types/Types'
const initialState = {
    counter: 10
};
export const counterReducer = (state=initialState, action) =>{
    console.log('counterReducer action=> ',action, state)
    switch(action.type){
        case INCREMENT :{
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        default: return state
    }
}


