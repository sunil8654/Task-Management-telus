import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  if (tasks.length === 0) return <p>No tasks available.</p>;

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          index={index + 1} // Dynamically assigned serial number
        />
      ))}
    </div>
  );
};

export default TaskList;
