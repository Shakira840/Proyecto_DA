import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="Description" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="Due Date" placeholder="Due Date" />
      </Form.Group>

      <Button variant="primary" type="submit">
        ADD GOAL
      </Button>
    </Form>
  );
}

export default Formulario;