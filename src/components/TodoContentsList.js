import React from 'react';
import TodoContents from "./TodoContents";

const TodoContentsList = ({todos, onDeleteOne}) => {
    const todoList = todos.map(
        (todo, i) => (
            <TodoContents
                key={i}
                index={i}
                {...todo}
                onDeleteOne={onDeleteOne}
            />
        )
    );
    return (
        <div>
            {todoList}
        </div>
    );
};

TodoContentsList.defaultProps = {
    todos: [{todo: '숙제하기'},]
};
export default TodoContentsList;
