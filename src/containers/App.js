import React, {Component} from 'react';
import * as actions from '../actions';
import { List, Typography } from 'antd';

import TodoListHeader from '../components/TodoHeader';
import {connect} from "react-redux";
import TodoContentsList from "../components/TodoContentsList";

class App extends Component {
    render() {
        const {todos, onCreate, onChange, input, onDeleteOne} = this.props;
        return (
            <div className="App">
                <TodoListHeader
                    onCreate={onCreate}
                    onChange={onChange}
                    value={input}
                />
                <TodoContentsList
                    todos={todos}
                    onDeleteOne={onDeleteOne}
                />
            </div>

        );
    }
}

// 액션 생성
const mapToDispath = (dispatch) => ({
    onCreate: () => dispatch(actions.create()),
    onChange: (e) => dispatch(actions.changeInput(e)),
    onDeleteOne: (index) => dispatch(actions.deleteOne(index)),
});

const mapStateToPros = (state) => ({
    todos: state.todos,
    input: state.input,
});

export default connect(mapStateToPros, mapToDispath)(App);
