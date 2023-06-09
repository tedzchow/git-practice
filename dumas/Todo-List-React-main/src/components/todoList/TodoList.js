import './todoList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function TodoList({ todos, setTodos }) {

    const handleDone = index => {
        todos[index].done = !todos[index].done;
        setTodos([...todos]);
    }

    const handleDelete = index => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <ul className='todoList'>
            {todos.map((todo, index) => (
                <li className={`todoList_item ${todos[index].done ? 'done' : ''}`} key={index}>            
                    <span>{todo.text}</span>
                    <div className='todoList_item_btn'>
                        <TaskAltIcon
                            titleAccess={todos[index].done ? 'Marquer comme non terminé' : 'Marquer comme terminé'}
                            style={{ cursor: 'pointer', fontSize: '25px', color: todos[index].done ? '#000' : 'green' }}
                            onClick={() => handleDone(index)}
                        />
                        <DeleteIcon
                            titleAccess='Supprimer'
                            style={{ cursor: 'pointer', fontSize: '25px', color: 'crimson' }}
                            onClick={() => handleDelete(index)}
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}
