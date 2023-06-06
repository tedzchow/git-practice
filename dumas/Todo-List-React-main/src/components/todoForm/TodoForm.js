import './todoForm.css';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import TodoList from '../todoList/TodoList';

export default function TodoForm() {

	const [todos, setTodos] = useState([]);

	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!inputValue) return;
		setTodos([...todos, {text: inputValue, done: false}]);
		setInputValue('');
	}

	return (
		<form className='form'>
			<div className='form_group'>
				<input
					type='text'
					placeholder='Nouvelle tâche'
					className='form_input'
					aria-label='Nouvelle tâche'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button 
					className='form_btn' 
					onClick={handleSubmit}>
					{inputValue ? 
						<AddIcon titleAccess='Ajouter' style={{color : '#FFBF46', fontSize: '30px'}}/> : 
						<AddIcon titleAccess='Ajouter' style={{fontSize: '30px'}}/>
					}
				</button>
			</div>
			<TodoList todos={todos} setTodos={setTodos}/>
		</form>
	)
}
