import './todoList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function TodoList({ todos, setTodos }) {

    const handleDone = index => {
        todos[index].done = !todos[index].done;
        setTodos([...todos]);
    }

  

    return (
        <ul className='todoList'>
            {todos.map((todo, index) => (
                <li className={`todoList_item ${todos[index].done ? 'done' : ''}`} key={index}>            
                    <input type="checkbox"
                        titleAccess={todos[index].done ? 'Marquer comme non terminé' : 'Marquer comme terminé'}
                        style={{ cursor: 'pointer', fontSize: '25px', color: todos[index].done ? '#aa77ff' : 'green' }}
                        onClick={() => handleDone(index)}
                    />
                    <span>{todo.text}</span>
                    <div className='todoList_item_btn'>
                        <span
                            titleAccess='Supprimer'
                            style={{ cursor: 'pointer', fontSize: '20px' }}
                            onClick={() => handleDelete(index)}
                        >X</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}
