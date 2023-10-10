import { useSelector, useDispatch } from 'react-redux'
import { useState }                 from 'react'
import { addTag, deleteTag }        from '../utils/redux/features/tagSlice.js'
import { MATH_OPERATORS }           from '../utils/consts.js'

export default function TagInput() {

  const tags      = useSelector(state => state.tag.value)
  const dispatch  = useDispatch()

  const [ newTag, setNewTag ]   = useState("")
  let   [ counter, setCounter ] = useState(tags.length)


  const onDeleteTag = e => {
    const input     = document.querySelector("#input")
    const form      = document.querySelector("#form")
    const tagList   = document.querySelector("#tag_list")
    
    if(e.code == "ArrowLeft") {
      if(counter != 0) {
        setCounter(counter-=1)
        const lastChild = tagList.querySelectorAll("li")[counter]
        tagList.insertBefore(form, lastChild)
        input.focus()
      }
    }

    if(e.code == "ArrowRight") {
      if(counter != tags.length) {
        setCounter(counter+=1)
        const lastChild = tagList.querySelectorAll("li")[counter]
        tagList.insertBefore(form, lastChild)
        input.focus()
      }
    }

    if(e.code == "Backspace" && !input.value) {
      dispatch(deleteTag(tags.length - 1))
    }
  }

  const onChange = e => {
    const form = document.querySelector("form")
    if(MATH_OPERATORS.includes(e.target.value)) {
      dispatch(addTag({text: e.target.value, value: 0}))
      form.reset()
    }

    const suggestion_menu = document.querySelector("#suggestion_menu")
    setNewTag(e.target.value)
    if(tags.some(tag => tag.text.split("").includes(e.target.value))) {
      suggestion_menu.setAttribute("class", "visible absolute left-3 w-full h-52 border border-slate-300")
    }else{
      suggestion_menu.setAttribute("class", "invisible absolute left-3 w-full h-52 border border-slate-300")
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    newTag && !tags.find(tag => tag.text == newTag) && dispatch(addTag({text: newTag, value: 0}))
    e.target.reset()
  }
  
  return (
    <div className="flex flex-wrap items-center p-5 border border-slate-400">
      <ul id='tag_list' className="flex flex-wrap items-center gap-3 text-xl">
        {
          tags.map(tag => (
            <li className={`${!MATH_OPERATORS.includes(tag.text) && "bg-gray-300"} rounded-md p-2 font-semibold cursor-pointer`}>
              {tag.text}
            </li>
          ))
        }
        <form id='form' className="relative" onSubmit={onSubmit}>
          <input 
            type="text" 
            id='input'
            className="ml-3 outline-none text-xl w-full"
            onChange={onChange}
            onKeyDown={onDeleteTag} 
          />
          <div id='suggestion_menu' className="invisible absolute left-3 w-full h-52 border border-slate-300"></div>
        </form>
      </ul>
    </div>
  )
}