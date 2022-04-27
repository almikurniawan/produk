import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducerPenjual from '../reducers/penjual';
import reducerProduk from '../reducers/produk';
import reducerListProduk from '../reducers/listProduk';
import thunk from 'redux-thunk';

const allReducer = combineReducers({
    reducerPenjual,
    reducerProduk,
    reducerListProduk
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;