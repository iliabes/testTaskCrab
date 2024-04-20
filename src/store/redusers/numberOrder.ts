import { createSlice } from '@reduxjs/toolkit';




export const numberOrder = createSlice({
    name: 'order',
    initialState: 6,
    reducers: {
        increaseOrder(state){
            state = state + 1
            return state
        }
        
    },
});

export default numberOrder.reducer

export const {increaseOrder} = numberOrder.actions


