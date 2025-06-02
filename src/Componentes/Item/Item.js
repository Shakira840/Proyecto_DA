import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Item.scss";
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../reducers/todoSlice';
import { removeGoal } from '../../reducers/goalsSlice'; 

function Item(props) {
  const dispatch = useDispatch();

  const removeItem = (e) => {
    e.preventDefault();
    console.log("Removing item: ", props);
    if (props.type === "task") {
      dispatch(removeTodo(props.id));
    } else if (props.type === "goal") {
      dispatch(removeGoal(props.id));
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className="fw-bold">Description</Card.Text>
        <Card.Text>{props.description}</Card.Text>

        <Card.Text className="fw-bold">Due Date</Card.Text>
        <Card.Text>{props.dueDate}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="info" onClick={removeItem}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
