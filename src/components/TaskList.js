import './TaskList.css'
import { useState } from "react";
import { TaskCard } from './TaskCard';

export const TaskList = ({ tasks, setTask }) => {
    const [show, setShow] = useState(true)

    function handleRemove(taskId) {
        setTask(tasks.filter((task) => { return task.id !== taskId }))
    }

    return (
        <section className="tasklist"> {/*We nedd a react fagment to be able to have all these code below, it's a nameless div*/}
            <ul>
                <div className="header">
                    <h1>TaskList</h1>
                    <button onClick={() => setShow(!show)} className="trigger"> {show ? "Hide Task" : "Show Task"} </button>
                </div>
                {show &&
                    tasks.map((task) => {
                        return <TaskCard key={task.id} task={task} handleRemove={handleRemove} />
                    })
                }
            </ul>
        </section>
    )
}
