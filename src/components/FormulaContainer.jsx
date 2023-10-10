import { useState, Children, cloneElement } from 'react'
import { DATE_VALUE }                       from '../utils/consts.js'

export default function FormulaContainer({ children }) {
  
  const [ hidden, setHidden ] = useState(true)
  const [ tags, setTags ]     = useState(["manzana", "pera", "durazno", "a", "aaaaaaaa"])

  const renderChildren = () => {
    return Children.map(children, child => {
      return cloneElement(child, {
        hidden,
        tags,
        setTags
      })
    })
  }

  return (
    <div className="w-3/4 p-10 border border-zinc-300 h-2/3 overflow-y-auto">
      <section className="relative flex items-center justify-between bg-zinc-300 p-3 rounded-t-md">
        <div>
          <p>
            <i 
              class={`absolute cursor-pointer left-5 fa-solid ${ !hidden ? "fa-caret-right" : "fa-caret-down"} text-xl text-zinc-500 hover:text-zinc-800 transition duration-300`}
              onClick={() => hidden ? setHidden(false) : setHidden(true)}
            ></i>
            <h1 className="text-lg cursor-pointer ml-8">Google GSuite Expense</h1>
          </p>
        </div>
        <div>
          <i class="fa-solid fa-circle-info mr-2 text-xl cursor-pointer text-zinc-500 hover:text-zinc-800 transition duration-300"></i>
          <i class="fa-solid fa-ellipsis text-xl cursor-pointer text-zinc-500 hover:text-zinc-800 transition duration-300"></i>
        </div>
      </section>
      <section className={`border border-zinc-300 flex items-center justify-between ${!hidden && "rounded-b-md"} bg-blue-50 p-5`}>
        <h1 className="text-3xl">1</h1>
        <input className="bg-zinc-200 px-3 rounded-md text-xs p-1 cursor-pointer outline-none" type="date" value={DATE_VALUE} />
      </section>
      {renderChildren()}
    </div>
  )
}
