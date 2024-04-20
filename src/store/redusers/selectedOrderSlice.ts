import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedOrder:1
}

export const selectedOrderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        setSelectedOrder: (state,action) => {
            state.selectedOrder = action.payload
            return state;
        }
    }
})

export default selectedOrderSlice.reducer

export const {setSelectedOrder} = selectedOrderSlice.actions

