import * as Actiontypes from './ActionTypes';

export const Admin = (state = {adminusers:[], errMess:null}, action) => {
    switch(action.type) {
        case Actiontypes.USER_LOGIN:
            return {...state, adminusers:action.payload, errMess:null};
        case Actiontypes.USER_FAILED:
            return {...state, adminusers:[], errMess:action.payload};
        default:
            return state;
    }
};