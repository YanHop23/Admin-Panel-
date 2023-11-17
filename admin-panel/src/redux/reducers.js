import { REQUEST_LOGIN } from './actions';

function checkPassword(action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return action.password;
    }
};