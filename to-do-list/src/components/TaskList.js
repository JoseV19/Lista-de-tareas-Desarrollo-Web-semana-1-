import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/TaskList.css';

function TaskList({ tasks, onRemove }) {
  return (
    <div className="task-list mt-3">
      {tasks.map((task, index) => (
        <Card key={index} className="task-card mb-3">
          <Card.Body>
            <Card.Title>Name: {task.name}</Card.Title>
            <Card.Text>
              Description: {task.description}<br />
              <strong>Due Date:</strong> {task.dueDate}
            </Card.Text>
            <Button variant="danger" onClick={() => onRemove(index)}>Remove</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TaskList;

