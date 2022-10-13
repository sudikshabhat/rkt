const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecream: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state =>{
            state.numOfIcecream--
        },
        restocked: (state,action) => {
            state.numOfIcecream += action.payload
        },
    },
    // two ways to define
    //using a mapping object where key corresponds to an action type from diff slice
    //extraReducers: {
        
        // ['cake/ordered']: (state) => {
        //     state.numOfIcecream--
        // }
    //}
    
    //method 2 using build function
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIcecream--
        })
    }
  
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions