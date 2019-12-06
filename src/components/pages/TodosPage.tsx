import React,{ useState, useEffect }  from 'react';
import TodoForm from '../TodoForm'
import { TodoList } from '../TodoList'; 
import { ITodo } from '../interfaces';

export const TodosPage: React.SFC = () => {
        const [todos,setTodos] = useState<ITodo[]>([])
      
        useEffect(()=> {
          const saved =JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
          setTodos(saved)
        }, [])
      
        useEffect(()=> {
          localStorage.setItem('todos',JSON.stringify(todos))}
          ,[todos])

        const addHandler = (title: string) => {
          const newTodo = {
            title,
            id: Date.now(),
            completed: false
          }
          setTodos((prev)=> [newTodo,...prev])
        }
        const toggleHandler = (id:number) => {
          setTodos((prev)=> prev.map(todo => {
            if(todo.id === id){
              todo.completed =!todo.completed
            }
            return todo
          }))
        }
        const removeHandler = (id:number) => {
          setTodos((prev)=> prev.filter(c => c.id !== id))
        }
      
    return ( 
        <>
    <TodoForm 
      onAdd={addHandler}
    />
    <TodoList 
      todos={todos}
      onToggle={toggleHandler}
      onRemove={removeHandler}
    />
        </>
    );
}
 
