// reducer.js
const initialState = {
    users: [] // Початковий стан для користувачів
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        // Інші випадки для інших дій
        default:
            return state;
    }
};

export default userReducer;
