//proses redux

const _add = () => ({
    type: 'ADD'
})

const _substract = () => ({
    type: 'SUBSTRACT'
})

//tambah delay 10ms
export function incrementAsync() {
    return async (dispatch) => {

        setTimeout(() => {
            dispatch(_add());
        }, 10)
    }
}
//tambah delay 10ms
export function decrementAsync() {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch(_substract());
        }, 10)
    }
}