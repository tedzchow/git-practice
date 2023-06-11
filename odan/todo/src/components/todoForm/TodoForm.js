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
					placeholder='Write task name'
					className='form_input'
					aria-label='Nouvelle tâche'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button 
					className='form_btn' 
					onClick={handleSubmit}>
						<button style={{width:"90px",height:"100%",border:"1px #aa77ff solid",borderRadius:"5px",color:"#aa77ff"}}>							
							+ Add new
						</button>
					
				</button>
			</div>
			<TodoList todos={todos} setTodos={setTodos}/>
		</form>
	)
}
