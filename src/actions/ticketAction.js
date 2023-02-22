
const chooseTicket = (data) => {
    return {
        type: 'CHOOSE_TICKET',
        payload: data
    }
}

export { chooseTicket }