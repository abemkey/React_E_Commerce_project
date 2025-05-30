import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Fix: Import thunk as a named export
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer, 
    productUpdateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,
               } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'


import { 
    userLoginReducer , 
    userRegisterReducer ,
    userDetailsReducer, 
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,} from './reducers/userReducers'

import { 
    orderCreateReducer  ,
     orderDetailsReducer,
     orderPayReducer,
     orderListMyReducer,
     orderListReducer,
     orderDeliverReducer,} from './reducers/orderReducers'


// Root reducer (add your reducers here)
const rootReducer = combineReducers({
    productList: productListReducer ,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

    
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
});


const cartItemsFromStorage = localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems')):[]

const userInfofromStorage = localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo')):null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


// Initial state
const initialState = {
    cart:{
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,

     },
    userLogin:{userInfo: userInfofromStorage }
};


// Middleware array
const middleware = [thunk];

// Create store with middleware and Redux DevTools integration
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
