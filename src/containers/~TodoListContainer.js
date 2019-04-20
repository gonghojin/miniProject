import TodoContentsList from '../components/TodoContentsList';
import {connect} from 'react-redux';

const mapStateToPros = (state) => ({todos: state.todos,});

const TodoListContainer = connect(mapStateToPros, null)(TodoContentsList);

export default TodoListContainer;