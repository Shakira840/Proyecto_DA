import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Componentes/Item/Item.js';
import Menu from './Componentes/Menu/Menu.js';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Formulario from './Componentes/Formulario/Formulario.js';

function App() {
  return (
    <div className="App">
        <Menu></Menu>
       <Container>
        <Row>
       <Col><Formulario></Formulario></Col>
       <Col>
       <Item></Item>
       <Item></Item>
       <Item></Item>
       <Item></Item>
       
       </Col>
       </Row>

       </Container>
   
    
    </div>
  );
}

export default App;
