//the  reducer and the actions were grouped
import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState, //should be in key : value but only once means it is initialized to itself
    reducers: {
        ordered: (state) =>{
            state.numOfCakes--
        },
        restocked: (state,action) => {
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
export const {ordered, restocked } = cakeSlice.actions