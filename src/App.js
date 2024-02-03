import "./App.css"
import { useState } from "react";

const initialState = [
  { id: 1, name: "Chapter first", completed: true },
  { id: 2, name: "Chapter second", completed: false },
  { id: 3, name: "Chapter third", completed: false }
]

const App = () => {
  const [books, setBooks] = useState(initialState)
  const [show, setShow] = useState(true)

  function handleRemove(bookId) {
    setBooks(books.filter((book) => { return book.id !== bookId }))
  }

  return (
    <div className="App">
      <h1>Book chapters</h1>
      <ul>
        <button onClick={() => setShow(!show)} className="trigger"> Toggle </button>
        {/* if show is true, then only the list of book chapters is rendered otherwise not */}
        {show &&
          books.map((book) => {
            return <li key={book.id} className={book.completed ? "completed" : "incomplete"}> {/*using ternary operator we can decide what css to apply!*/}
              <span>{book.id}-{book.name}</span>
              <button onClick={() => { handleRemove(book.id) }} className="delete"> Delete </button>
            </li>
          })
        }
      </ul>
    </div >
  )
}

export default App;