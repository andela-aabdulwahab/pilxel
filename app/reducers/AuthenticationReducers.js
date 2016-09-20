import {
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_FAILURE,
    AUTHENTICATE_REQUEST,
    LOGOUT,
    LOAD_USERDATA_SUCCESS,
    LOAD_USERDATA_FAILURE,
    AUTH_VERIFICATION_FAILURE,
} from '../constants';

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    userData: null,
    authenticatError: ""
}

export const authenticate = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE_REQUEST:
          return Object.assign({}, state, {isFetching: true, isAuthenticated: false});
        case AUTHENTICATE_SUCCESS:
          return Object.assign({}, state, {isFetching: false, isAuthenticated: true});
        case AUTHENTICATE_FAILURE:
          return Object.assign({}, state, {isFetching:false, isAuthenticated: false, authenticatError: action.error});
        case AUTH_VERIFICATION_FAILURE:
          return Object.assign({}, state, {isAuthenticated: false});
        case LOGOUT:
        case LOAD_USERDATA_FAILURE:
          return Object.assign({}, state, {isAuthenticated: false, userData: null});
        case LOAD_USERDATA_SUCCESS:
          return Object.assign({}, state, {isAuthenticated: true, userData: action.userData });
        default:
          return state
    }
}
