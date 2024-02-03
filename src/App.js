import "./App.css"
import { useState } from "react";

const initialState = [
  { id: 1, name: "Recording Lecture", completed: true },
  { id: 2, name: "Edit React Lecture", completed: false },
  { id: 3, name: "Upload React Lecture", completed: false }
]

const App = () => {
  const [tasks, setTask] = useState(
    initialState
  )

  function handleDelete(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => ( //iterate through each elemtn in the tasks array
          <li key={task.id}> {/*give each list item an unique id*/}
            <span>{task.id} - {task.name}</span> {/*pass arrow function to onclick function so the function handleDelete is called only*/}
            <button onClick={() => { handleDelete(task.id) }} className="delete">Delete</button> {/*when the button is clicked*/}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;