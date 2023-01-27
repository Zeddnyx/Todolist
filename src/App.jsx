import { useState } from 'react'

function App() {

  const [input, setInput] = useState('')
  const [activity, setActivity] = useState([])
  const [local, setLocal] = useState([])

  const handle = e => {
    e.preventDefault()

    // jika tidak ada hurup/number maka tidak di masukan ke state activity
    if (input.length == 0 ) {
      null
    } else {
        setActivity([...activity, input])

        const localS = localStorage.setItem('list', JSON.stringify(activity))
        setLocal(JSON.parse(localStorage.getItem('list')))
    }
  }
   const reset = () => {
     setLocal(JSON.parse(localStorage.removeItem('list')))
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
        <button className={addBtn}>Add</button>
      </form>

      <ul className={ul}>
        {local.map((list, i) =>  <li key={i}>{list}</li> )}
      </ul>
      
      <button onClick={reset} className={resetBtn}> Reset list</button>

    </div>
  )
}
export default App


const parent = 'relative max-w-sm mt-20 mx-auto grid'

const wipeBtn = 'font-extrabold text-red-500 text-xl ml-[215px] top-4 absolute outline-none border-2 hover:border-red-500 rounded-full w-8 h-8'
const form = 'flex gap-2 mx-auto'
const inp = 'bg-transparent border-2 p-4 rounded w-60 outline-none hover:border-blue-500'
const addBtn = 'bg-blue-500 text-sm text-[#fff] rounded font-bold outline-none w-[80px] hover:bg-blue-600'

const ul = 'px-10 mt-10 list-disc grid grid-cols-2 gap-3'

const resetBtn = 'mx-7 text-sm bg-blue-500 text-[#fff] mt-10 rounded font-bold outline-none p-2 w-[120px] hover:bg-blue-600'
