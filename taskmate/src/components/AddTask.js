export const AddTask = ({ taskList, setTaskList, task, setTask }) => {

    const handleEdit = (id) => {
        const date = new Date();
        const updatedList = taskList.map((todo) => {
            if (todo.id === id) {
                return { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
            }

            return todo;
        })
        setTaskList(updatedList);
    }

    const addNewTask = (event) => {
        const date = new Date();
        const newTask = {
            id: date.getTime(),
            name: event.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }

        setTaskList([...taskList, newTask]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        task.id ? handleEdit(task.id) : addNewTask(event);
        setTask({});
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ""} autoComplete="off" maxLength="25" placeholder="add task" onChange={(e) => setTask({ ...task, name: e.target.value })} />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}
