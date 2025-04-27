import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
            Name
        </Card.Text>
        <Card.Text>
            Description
        </Card.Text>
        <Card.Text>
            Due Date
        </Card.Text>
        <Button variant="primary">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;