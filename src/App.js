import React, { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import "./App.css"; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [theme, setTheme] = useState("light");
  const [hasLoaded, setHasLoaded] = useState(false); 

  // Toggle light/dark theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);


  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  // Load tasks from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      let loaded = JSON.parse(saved);
      loaded = loaded.map((task, index) => ({
        ...task,
        srNo: task.srNo || index + 1,
      }));
      setTasks(loaded);
    }
    setHasLoaded(true); 
  }, []);

  // Save tasks to localStorage after first load
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, hasLoaded]);

  // Add new task
  const addTask = (task) => {
    const newSrNo =
      tasks.length > 0 ? Math.max(...tasks.map((t) => t.srNo || 0)) + 1 : 1;
    const taskWithSrNo = { ...task, srNo: newSrNo };
    setTasks([taskWithSrNo, ...tasks]);
  };

  // Toggle complete status
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // Filter + search + sort tasks
  const getFilteredTasks = () => {
    let result = [...tasks];

    if (searchTerm.trim()) {
      result = result.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter === "Active") result = result.filter((t) => !t.completed);
    if (filter === "Completed") result = result.filter((t) => t.completed);

    result.sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate)
    );

    return result;
  };

  return (
    <main className={`app ${theme}`}>
      <h1>Task Manager</h1>

      <button className="theme-toggle-btn fixed-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <AddTaskForm addTask={addTask} />

      <FilterButtons
        setFilter={setFilter}
        currentFilter={filter}
        toggleSortOrder={toggleSortOrder}
        sortOrder={sortOrder}
      />

      <TaskList
        tasks={getFilteredTasks()}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </main>
  );
}

export default App;
