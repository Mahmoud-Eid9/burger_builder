import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};
const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return {
    ...state,
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true,
  };
};
const fetchBurgerSuccess = (state, action) => {
  return updateObject(state, { loading: false, orders: action.orders });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.PURCHASE_BURGER_START:
      return { ...state, loading: true };
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchBurgerSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
