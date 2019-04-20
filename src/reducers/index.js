import * as types from '../actions/ActionTypes';

const initialState = {
    input: '',
    todos: [
        {content: '나는개발자다'},
    ],
};

const todoFnc = (state = initialState, action) => {
    const {input, todos} = state;
    switch (action.type) {
        case types.CREATE:
            console.info("trigger Create Action");
            return {
                input: '',
                todos: [
                    ...todos,
                    {content: input},
                    ]
            };

        case types.CHANGE:
            console.info("trigger Change Action");
            return {
                ...state,
                input: action.content,
            };

        case types.DELETE_ONE:
            console.info("trigger DeleteOne Action");
            return {
                ...state,
                todos: [
                    ...todos.slice(0, action.index),
                    ...todos.slice(action.index + 1, todos.length),
                ]
            };
        default:
            console.info("trigger Default Action");
            return state;
    }
};

export default todoFnc;