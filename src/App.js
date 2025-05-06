import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Componentes/Item/Item.js';
import Menu from './Componentes/Menu/Menu.js';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormTaskAndGoal from './Componentes/Formulario/Formulario.js';
import AddingMobileButton from './AddingMobileButton/AddingMobileButton.js';
import { initAddTodo } from './reducers/todoSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);
  const arr = [
    {
      'name':'caminar al perro 1'
    },
    {
      'name':'caminar al perro 2'
    }
  ]
  useEffect(() => {
    arr.map((item) => {
      dispatch(initAddTodo(item))
    })
  }, []);

  return (
    <div className="App">
      <Menu/>
      
      
      { /*<Todos/> }
      { <Goals/> */}

      <Container>
      <Row>
        <Col xs={0} md={0}  className='d-none d-sm-block d-sm-none d-md-block '><FormTaskAndGoal/></Col>
        <Col xs ={0}  sm ={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <AddingMobileButton className='float-left'/>
            </div>
          </Row>
          <Row>
            <div className='scrolling'>
              {
                todos.map((todo, index) => {
                  return (
                    <Item key={index} name={todo.name}/>
                  )
                }
                )
              }
          </div>
          </Row>

        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;