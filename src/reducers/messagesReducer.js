const INITIAL_STATE = {
    message: {

        action: "join-room",
        message: "",
        target: {
            id: 1,
            name: "" // Target ocupa un Room
        },
        sender: {
            id: 1,
            name: "" // Sender es un usuario o el sistema

        }
    }
}

const messagesReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){
        case 'add_message':
        return {
            ...state,
            message: action.payload,
        }
        default:
            return state
    }


}

export default messagesReducer