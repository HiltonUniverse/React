import "./TaskCard.css";

export const TaskCard = ({ task, handleRemove }) => {
    return (
        <div className="taskList">
            <li className={task.completed ? "completed" : "incomplete"}>
                <span>{task.id}-{task.description}</span>
                <button onClick={() => { handleRemove(task.id) }} className="delete"> Delete </button>
            </li>
        </div>
    )
}
