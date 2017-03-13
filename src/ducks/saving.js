const SET_INITIAL = 'SET/INITIAL';
const SET_YEARS = 'SET/YEARS';
const SET_CATEGORY = 'SET/CATEGORY';
const SET_COST = 'SET/COST';
const SET_DISCOUNT = 'SET/DISCOUNT';

const initialState = {
  initial: 100000,
  years: 1,
  employeCategory: 0.5,
  costUniversity: 2000000,
  discountUniversity: 0.05
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL:
      return {
        ...state,
        initial: action.val
      };
    case SET_YEARS:
      return {
        ...state,
        years: action.val
      };
    case SET_CATEGORY:
      return {
        ...state,
        employeCategory: action.val
      };
    case SET_COST:
      return {
        ...state,
        costUniversity: action.val
      };
    case SET_DISCOUNT:
      return {
        ...state,
       discountUniversity: action.val
      };

    default:
      return state;
  }
}

export const setInitial = val => ({ type: SET_INITIAL, val });
export const setYears = val => ({ type: SET_YEARS, val });
export const setCategory = val => ({ type: SET_CATEGORY, val });
export const setCost = val => ({ type: SET_COST, val });
export const setDiscount = val => ({ type: SET_DISCOUNT, val });
