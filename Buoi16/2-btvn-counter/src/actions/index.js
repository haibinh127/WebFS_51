export const increaseNumber = (plusNumber) => {
    return {
        type: 'INCREMENT',
        payload: plusNumber
    }
}

export const decreaseNumber = (minusNumber) => {
    return {
        type: 'DECREMENT',
        payload: minusNumber
    }
}