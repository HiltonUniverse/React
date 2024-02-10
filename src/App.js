import "./App.css"
import { Header } from './components/Header'
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { useState } from "react";

const App = () => {

  const [tasks, setTask] = useState([])

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTask={setTask} />
        <TaskList tasks={tasks} setTask={setTask} />
      </main>
      <Footer />
    </div >
  )
}

export default App;