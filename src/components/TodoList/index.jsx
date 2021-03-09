import React from 'react';

const TodoList = props => {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: Date.now(),
  //     isDone: false,
  //     body: '',
  //   },
  // ]);
  // const addTask = values => {
  //   const newTask = {
  //     body: values.body,
  //     id: Date.now(),
  //     isDone: false,
  //   };
  //   setTasks([...tasks, newTask]);
  // };
  return (
    <div>
      {/* <Formik
        initialValues={{ body: '' }}
        onSubmit={addTask}
      >
        <Form>
          <Field type='text' name='body' />
          <Field
            type='submit'
            value='Add'
          />
        </Form>
      </Formik> */}

      <ul>
        {props.tasks.map(t => (
          <li key={t.id}>{JSON.stringify(t)}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
