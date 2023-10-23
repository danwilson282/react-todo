import TodoItem from "@/components/TodoItem"
//import { useContext } from 'react';
import { useTodosStore } from '@/store';
//import { useTodosContext } from '@/context/TodosContext';

const TodosList = () => {
    const todos = useTodosStore((state) => state.todos);
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} itemProp={todo} />
            ))}
        </ul>
    );
};
export default TodosList;