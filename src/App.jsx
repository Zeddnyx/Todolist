import React, { useState } from 'react'
function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handle = e => {
    e.preventDefault()

    setTodos([...todos, input])
  }

  // useEffect(() => {
  //   localStorage.setItem('list', JSON.stringify(todos))
  //   setActivitas(JSON.parse(localStorage.getItem('list')))
  // }, [todos])

  const remove = index => {
    const newtodos = [...todos]
    newtodos.splice(index, 1)
    setTodos(newtodos)
  }

  return (
    <div className={parent}>

      <form className={form} onSubmit={handle}>
        <input  className={inp} 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="type something..."
        />
        <button className={addBtn}>Add</button>
      </form>

      <ul className={ul}>
        {todos.map((list, i) => {
          return <li key={i} className={li}>
            {list}
            <button onClick={() => remove(i)} type="submit">x</button>
          </li>
        })}
      </ul>
      
    </div>
  )
}
export default App


const parent = 'relative max-w-sm mt-20 mx-auto grid'

const form = 'flex gap-2 mx-auto'
const inp = 'bg-transparent border-2 p-4 rounded w-60 outline-none hover:border-blue-500'
const addBtn = 'bg-blue-500 text-sm text-[#fff] rounded font-bold outline-none w-[80px] hover:bg-blue-600'

const ul = 'px-10 mt-10 list-disc grid grid-cols-2 gap-3'
const li = 'flex gap-2'
