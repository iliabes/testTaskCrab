import { createSlice } from '@reduxjs/toolkit';
import initialOrderState from '../initialData'
import { IOrder } from '../../models/iUser';
import Search from '../../components/search/search';


const init:IOrder[] = initialOrderState


export const orderSlice = createSlice({
    name: 'order',
    initialState: init,
    reducers: {
        completeOrder: (state,action) => {
  
            return state.map((order) => {
                    if (order.id === action.payload) {
                        return {
                            ...order,
                            status: 'Завершенно',
                        };
                    }
                return order;
            });
            return state
        },
        createOrder: (state, action) => {
        state.push(action.payload);
        return state;
        },
        deleteOrder: (state, action)=>{
            for (const order of state) {
                if (order.id ==  action.payload) {
                    state.splice(state.indexOf(order), 1);
                }
            }
        },
        updateOrder: (state,action)=>{
            return state.map((order) => {
                    if (order.id === action.payload.id) {
                        return {
                            ...order,
                            company: action.payload.company,
                            ferryman:action.payload.ferryman,
                            tel:action.payload.tel,
                            comment: action.payload.comment,
                            status:action.payload.status,
                        };
                    }
                return order;
            });
            return state
        },
    },
});

export default orderSlice.reducer

export const {completeOrder,createOrder,deleteOrder,updateOrder} = orderSlice.actions


