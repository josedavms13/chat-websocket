const INITIAL_STATE = {
    currentUser: {
        name: '',
        password: '',
        token: '',
        avatarPicture: null
    }
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'add_user':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }


}
export default userReducer