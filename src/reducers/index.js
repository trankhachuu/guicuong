
import { combineReducers } from 'redux';
import products from './ProductReduce';
import categorys from './CategoryReduce';

const appReducers = combineReducers({
    products, 
    categorys 

});

export default appReducers;