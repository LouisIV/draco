import * as types from "./permissionActionTypes";

const initialState = {
  checking: false,
  permissions: null,
  requesting: false
};

const permissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECKING:
      return {
        ...state,
        checking: true
      };
    case types.NOT_CHECKING:
      return {
        ...state,
        checking: false
      };

    // Merges the old object and the new object
    case types.UPDATE_PERMISSIONS:
      return {
        ...state,
        permissions: { ...state.permissions, ...action.permissions }
      };
    case types.REQUESTING_PERMISSION:
      return {
        ...state,
        requesting: true
      };
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        requesting: false
      };
    case types.REQUEST_FAIL:
      return {
        ...state,
        requesting: false
      };
    default:
      return state;
  }
};

export default permissionReducer;
