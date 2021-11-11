import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDeleteTask, toggleReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes color="red" onClick={() => onDeleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
