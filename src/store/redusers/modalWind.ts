import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numberSlide:6,
    selectedOrder:1
}

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        setSelectedOrder: (state,action) => {
            state.selectedOrder = action.payload
            console.log('action.payload',action.payload)
            return state;
        }
    }
});

export default orderSlice.reducer

export const {setSelectedOrder} = orderSlice.actions

