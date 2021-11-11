import Task from "./Task";

const Tasks = ({ tasks, onDeleteTask, toggleReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
