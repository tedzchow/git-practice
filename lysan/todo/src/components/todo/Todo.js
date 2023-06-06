import './todo.css'
import TodoForm from '../todoForm/TodoForm'

export default function Todo() {
	return (
		<div className='todo'>
			<h1>Todo List</h1>
			<TodoForm />
		</div>
	)
}
