import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask, index }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>
        {index}. {task.title}
      </h3>
      {task.description && <p>{task.description}</p>}
      {task.dueDate && (
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
          Date: {task.dueDate}
        </p>
      )}
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button className="delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
