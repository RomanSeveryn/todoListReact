import React from 'react';
import { Formik, Form, Field } from 'formik';

const FormTodo = props => {
  return (
    <div>
      <Formik
        initialValues={{ body: '' }}
        onSubmit={props.addTask}
      >
        <Form>
          <Field type='text' name='body' />
          <Field
            type='submit'
            value='Add'
          />
        </Form>
      </Formik>
    </div>
  );
}

export default FormTodo;
