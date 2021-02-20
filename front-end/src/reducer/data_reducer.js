export const SET_USERS = 'SET_USERS';
export const SET_TASKS = 'SET_TASKS';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_CHANNELS = 'SET_CHANNELS';

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
            case SET_CHANNELS:
                return {
                    ...state,
                    channels: action.channels,
                    loading: false,
            };
            case SET_MESSAGES:
                return {
                    ...state,
                    messages: action.messages,
                    loading: false,
                };
        default:
            return state;
    }
};

export default dataReducer;