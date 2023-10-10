import { useState }   from 'react'
import { DATE_VALUE } from '../utils/consts.js'
import TagList        from '../components/TagList.jsx'

export default function Formula({ formula }) {
  
  const [hide, setHide] = useState(true)
  
  return (
    <div>
      <section className="relative flex items-center justify-between bg-zinc-300 p-3 rounded-t-md">
        <div>
          <i 
            id='arrow'
            className={`absolute cursor-pointer left-5 fa-solid ${hide ? "fa-caret-right" : "fa-caret-down"} text-xl text-zinc-500 hover:text-zinc-800 transition duration-300`}
            onClick={() => setHide(!hide)}
          ></i>
          <h1 className="text-lg cursor-pointer ml-8">
            {formula.name}
          </h1>
        </div>
        <div>
          <i class="fa-solid fa-circle-info mr-2 text-xl cursor-pointer text-zinc-500 hover:text-zinc-800 transition duration-300"></i>
          <i class="fa-solid fa-ellipsis text-xl cursor-pointer text-zinc-500 hover:text-zinc-800 transition duration-300"></i>
        </div>
      </section>
      <section className={`border border-zinc-300 flex items-center justify-between ${!hide && "rounded-b-md"} bg-blue-50 p-5`}>
        <h1 className="text-3xl">
          {formula.value} $
        </h1>
        <input className="bg-zinc-200 px-3 rounded-md text-xs p-1 cursor-pointer outline-none" type="date" value={DATE_VALUE} />
      </section>
      <TagList hidden={hide} />
    </div>
  )
}
