
const INITIAL_STATE = {
    mode: {
        mode : 1,
        name : ''
    }
}

const homeReducer = (state = INITIAL_STATE, action)=>{

    switch (action.type){
        case 'set_registered_home_state' :
            return{
                ...state,
                mode: {
                    mode : 1,
                    name : action.payload
                }
            }
        default :
            return state
    }
}

export default homeReducer