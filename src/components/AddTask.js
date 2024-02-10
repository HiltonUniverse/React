import { useState, useRef } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTask }) => {
    const [progress, setProgress] = useState(false);
    const taskRef = useRef("")

    // const handleChange = (event) => {
    //     setTaskValue(event.target.value)
    // }

    const handleReset = () => {
        //setTaskValue("");
        taskRef.current.value = "";
        setProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 10000),
            description: taskRef.current.value,
            completed: Boolean(progress)
        }
        setTask([...tasks, newTask])
        handleReset();
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" ref={taskRef} />
                <select onChange={(event) => { setProgress(event.target.value) }} value={progress}>
                    <option value="false"> Pending </option>
                    <option value="true"> Completed </option>
                </select>
                <button type="submit">Add Task</button>
                <span onClick={handleReset} className="reset">Reset</span>
            </form>
            <p>{taskRef.current.value}</p>
        </section>
    )
}
