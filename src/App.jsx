import { useState } from 'react'

function App() {

  const [input, setInput] = useState('')
  const [activity, setActivity] = useState([])

  const handle = e => {
    e.preventDefault()

    // jika tidak ada hurup/number maka tidak di masukan ke state activity
    input.length == 0 ? null : setActivity([...activity, input])
  }

  const wipe = () => setInput('')

  return (
    <div className={parent}>

      <button className={wipeBtn} onClick={wipe}>x</button>

      <form className={form} onSubmit={handle}>
        <input  className={inp} 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="type something..."
        />
        <button className={btn}>Add</button>
      </form>

      <ul className={ul}>
        {activity.map((list, i) =>  <li>{list}</li> )}
      </ul>

    </div>
  )
}
export default App


const parent = 'relative mt-20 w-full grid'

const wipeBtn = 'font-extrabold text-red-500 text-xl ml-[250px] top-4 absolute'
const form = 'flex gap-2 mx-auto'
const inp = 'bg-transparent border-2 p-4 rounded w-60 outline-none hover:border-blue-500'
const btn = 'bg-blue-500 text-[#fff] rounded font-bold p-4 w-[100px] hover:bg-blue-600'

const ul = 'px-10 mt-10 list-disc flex flex-col gap-3'

