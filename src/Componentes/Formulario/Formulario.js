import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Formulario.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from "react";
import { addTodo } from '../../reducers/todoSlice';
import { addGoal } from '../../reducers/goalsSlice';

function Formulario() {
  const dispatch = useDispatch();
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const option = useSelector((state) => state.option.value);
  
  const addItem = (e) => {
    e.preventDefault();

    const name = inputRefName.current.value;
    const description = inputRefDescription.current.value;
    const dueDate = inputRefDueDate.current.value;

    if (name && description && dueDate) {
      if (option === 'tasks') {
        dispatch(addTodo({ name, description, dueDate }));
      } else {
        dispatch(addGoal({ 
          id: Date.now(),
          name, 
          description, 
          dueDate 
        }));
      }


    }
  };

  return (
    <div className='space'>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={inputRefName} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} ref={inputRefDescription} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" ref={inputRefDueDate} />
        </Form.Group>

        {option === 'tasks' && (
          <Button variant="info" onClick={addItem}>Add Task</Button>
        )}
        {option === 'goals' && (
          <Button variant="info" onClick={addItem}>Add Goal</Button>
        )}
      </Form>
    </div>
  );
}

export default Formulario;

