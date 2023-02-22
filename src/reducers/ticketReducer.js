
const initialState = {
    chosenTicket: {}
       
}

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHOOSE_TICKET': {
            return {
                ...state,
                chosenTicket: action.payload
            }
        }
        default:
            return state
    }
}

export { ticketReducer }