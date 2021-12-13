import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import { ordersReducer } from './ordersReducer';
import { categoriesReducer } from './categoriesReducer';
import { dishesReducer } from './dishesReducer';
import { myOrdersReducer } from './myOrdersReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  orders: ordersReducer,
  categories: categoriesReducer,
  dishes: dishesReducer,
  myOrders: myOrdersReducer,
});

export default rootReducer;
