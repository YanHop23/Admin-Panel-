export const REQUEST_LOGIN = 'REQUEST_LOGIN';

export function requestLogin(password) {
    return {
        type: REQUEST_LOGIN,
        password,
    };
}