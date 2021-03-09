import React,{useState} from 'react';
import Form from 'components/Form';
import TodoList from 'components/TodoList';

const PageTodoList = props => {
  const [tasks, setTasks] = useState([
    {
      id: Date.now(),
      isDone: false,
      body: '',
    },
  ]);
  const addTask = values => {
    const newTask = {
      body: values.body,
      id: Date.now(),
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <div>
      <Form addTask={addTask}></Form>
      <TodoList tasks={tasks}></TodoList>
    </div>
  );
}

export default PageTodoList;
