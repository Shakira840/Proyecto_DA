import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componentes/Item/Item.js';
import Menu from './Componentes/Menu/Menu.js';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormTaskAndGoal from './Componentes/Formulario/Formulario.js';
import AddingMobileButton from './AddingMobileButton/AddingMobileButton.js';
import { initAddTodo } from './reducers/todoSlice';
//*import { addGoal } from './reducers/goalsSlice';  
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initAddGoal } from './reducers/goalsSlice';

function App() {
  const todos = useSelector((state) => state.todos.value);
  const goals = useSelector((state) => state.goals.value);
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  useEffect(() => {
    async function initFetch() {
      try {
        const resTasks = await fetch('http://localhost:3001/tasks/getTasks', {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "123"
          }
        });
        const tasks = await resTasks.json();
        tasks.forEach(task => dispatch(initAddTodo(task)));

        const resGoals = await fetch('http://localhost:3001/goals/getGoals', {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "123"
          }
        });
        const goalsData = await resGoals.json();
        goalsData.forEach(goal => dispatch(initAddGoal(goal)));

      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    }
    initFetch();
  }, [dispatch]);

  return (
    <div className="App">
      <Menu/>
      {/*<Todos/> 
      <Goals/>*/} 

      <Container>
        <Row>
          <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block'>
            <FormTaskAndGoal/>
          </Col>
          <Col xs={0} sm={0}>
            <Row className='d-md-none'>
              <div className='bg-transparent overlapping-div'>
                <AddingMobileButton className='float-left'/>
              </div>
            </Row>
            <Row>
              <div className='scrolling'>
             {option === 'tasks' &&
              todos.map((todo) => (
                <Item 
                  key={`task-${todo.id}`} 
                  id={todo.id} 
                  name={todo.name} 
                  description={todo.description} 
                  dueDate={todo.dueDate} 
                  type="task"    
                />
              ))
            }
            {option === 'goals' &&
              goals.map((goal) => (
                <Item 
                  key={`goal-${goal.id}`} 
                  id={goal.id} 
                  name={goal.name} 
                  description={goal.description} 
                  dueDate={goal.dueDate} 
                  type="goal"    
                />
  ))
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
