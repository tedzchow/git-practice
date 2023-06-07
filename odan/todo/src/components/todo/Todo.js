import './todo.css'
import TodoForm from '../todoForm/TodoForm'

export default function Todolist() {
	return (
		<div className='todo'>
			<h3>Todo List</h3>
			<TodoForm />
		</div>
	)
}
