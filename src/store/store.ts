import { configureStore, combineReducers } from '@reduxjs/toolkit'
import orderSliceReduser from './redusers/orderSlice'
import numberOrderReduser from './redusers/numberOrder'
import modalWind from './redusers/selectedOrderSlice'

const rootReduser = combineReducers({
    orderSliceReduser,
    numberOrderReduser,
    modalWind
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}


export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']