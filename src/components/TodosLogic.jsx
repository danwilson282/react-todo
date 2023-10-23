//import {useState, useEffect } from "react"
import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
//import { v4 as uuidv4 } from "uuid";
//import { TodosProvider } from '@/context/TodosContext';

const TodosLogic = () => {
  return (
    <div>
      <InputTodo />
      <TodosList />
    </div>
  );
};
export default TodosLogic;