import * as types from './ActionTypes';

export const create = () => ({
    type: types.CREATE,
   /* content,*/
});

export const changeInput = (e) => {
    const {name, value} = e.target;

    return {
        type: types.CHANGE,
        [name]: value,
    };
};

export const deleteOne = (index) => ({
    type: types.DELETE_ONE,
    index: index,
});