import { useState } from 'react';
import { todoAction } from '../../redux/_actions/todoAction';
import { RootState } from '../../redux/_reducers';
import { useDispatch, useSelector } from 'react-redux';

interface Todo {
    title: string;
    content: string;
}

const TodoList = () => {

    const [todoList, setTodoList] = useState<Todo>({
        title: '',
        content: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setTodoList(prevState => ({
            ...prevState,
                [name]: value
        }));
   };

   const dispatch = useDispatch();
   const { todo } = useSelector((state: RootState) => state);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(todoAction(todoList));

        setTodoList(prevstate => ({
            ...prevstate,
                title: '',
                content: '',
        }))

    }
    return (
        <div className="container max-w-3xl px-4 mx-auto sm:px-8 mt-20">
            <div className="py-8">
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <div>
                            <form onSubmit={handleSubmit} className="grid grid-cols-3 w-full gap-5 py-2 px-3 mb-10">
                                <div className="relative">
                                    <input type="text"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="title" placeholder="Title" value={todoList.title} onChange={handleInputChange} required/>
                                </div>
                                <div className="relative ">
                                    <input type="text"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="content" placeholder="Title" value={todoList.content} onChange={handleInputChange} required/>
                                </div>
                                <div className="relative ">
                                    <button type="submit" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            New
                                    </button>
                                </div>
                            </form>
                        </div>
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Title
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Content
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todo.todoVariable.map((todo: any,key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {todo.title}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {todo.content}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <button type="button"  className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;