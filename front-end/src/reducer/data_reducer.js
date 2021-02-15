export const SET_USERS = 'SET_USERS';
export const SET_TASKS = 'SET_TASKS';

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                    loading: false,
            };
            case SET_TASKS:
                return {
                    ...state,
                    tasks: action.tasks,
                    loading: false,
                };
        default:
            return state;
    }
};

export default dataReducer;