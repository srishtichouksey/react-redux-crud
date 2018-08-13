import * as Actiontypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchUser = () => (dispatch) =>{
    return fetch(baseUrl+ 'admin')
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            var error = new Error('Error'+response.status+':' + response.status.text);
            error.response = response;
            throw error;
        }
    }, error => {
            var errmess = new Error(error.message);
            throw errmess;
    })
    .then(response => response.json())
    .then(adminusers => dispatch(showUsers(adminusers)))
    .catch(error => dispatch(userFailed(error.message)));
};


export const showUsers = (adminusers) => ({
    type: Actiontypes.USER_LOGIN,
    payload: adminusers
});

export const userFailed = (errmess) => ({
    type: Actiontypes.USER_FAILED,
    payload: errmess
})