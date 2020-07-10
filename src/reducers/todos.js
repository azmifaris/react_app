//proses penambahan todo
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD TODO':
            return [
                ...state,
                action.todo
            ]
        default:
            return state;
    }
}

export default todos;