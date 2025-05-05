import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/TaskForm.css';

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState({ name: '', description: '', dueDate: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description && task.dueDate) {
      onAddTask(task);
      setTask({ name: '', description: '', dueDate: '' });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="task-form">
      <Form.Control name="name" placeholder="Name" value={task.name} onChange={handleChange} className="mb-2" />
      <Form.Control name="description" placeholder="Description" value={task.description} onChange={handleChange} className="mb-2" />
      <Form.Control type="date" name="dueDate" value={task.dueDate} onChange={handleChange} className="mb-2" />
      <Button type="submit" className="add-btn w-100">ADD GOAL</Button>
    </Form>
  );
}

export default TaskForm;

