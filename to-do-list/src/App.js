import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState('tasks');

  // 🔄 Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // 💾 Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const removeTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">To-Do App</Navbar.Brand>
          <Navbar.Toggle aria-controls="menu" />
          <Navbar.Collapse id="menu">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setView('tasks')}>Tasks</Nav.Link>
              <Nav.Link onClick={() => setView('goals')}>Goals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container my-4">
        <Header />
        {view === 'goals' && <TaskForm onAddTask={addTask} />}
        <TaskList tasks={tasks} onRemove={removeTask} />
      </div>
    </>
  );
}

export default App;
