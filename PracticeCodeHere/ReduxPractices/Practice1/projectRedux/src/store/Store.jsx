import { configureStore } from '@reduxjs/toolkit';
// storeCreate => this is configureation file
import Slice from '../slice/Slice';
export const Store = configureStore({
    reducer:{
        counter: Slice
    }
})
export default Store