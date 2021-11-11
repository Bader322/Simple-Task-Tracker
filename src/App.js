import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./index.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doc Appointment",
      day: "Feb 5th",
      reminder: true,
    },
    {
      id: 2,
      text: "Massage appt",
      day: "March 51th",
      reminder: false,
    },
    {
      id: 3,
      text: "Gym sesh",
      day: "tomorrow",
      reminder: false,
    },
    {
      id: 4,
      text: "stay home, covid",
      day: "yesterday",
      reminder: true,
    },
  ]);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const onDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const clearAllTasks = () => {
    setTasks("");
  };
  const numOfElements = () => {
    return tasks.length;
  };
  return (
    <div className="container">
      {showAddTask && <AddTask onAdd={addTask} />}
      <Header
        title="Track Task"
        onAdd={() => setShowAddTask(!showAddTask)}
        showForm={showAddTask}
        clearAllTasks={clearAllTasks}
        numOfElements={() => numOfElements()}
      />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
