import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect }      from 'react'
// import { addTag, deleteTag }        from '../utils/redux/features/tagSlice.js'
import { MATH_OPERATORS }           from '../utils/consts.js'

export default function TagInput({ tags, index }) {

  const dispatch  = useDispatch()

  const formulas = useSelector(state => state.formulas)

  const [ newTag, setNewTag ]             = useState("")
  let   [ counter, setCounter ]           = useState(0)
  let   [ totalCounter, setTotalCounter ] = useState(0)

  useEffect(() => {
    if(tags) {
      setCounter(counter+=tags.length)
      tags.forEach(tag => { if(tag.type == "function") setCounter(counter+=2) })
      setTotalCounter(totalCounter+=counter)
    }
  }, [])

  const onKeyDown = e => {
    const input     = document.querySelector("#input")
    const form      = document.querySelector("#form")
    const tagList   = document.querySelector("#tag_list")
    
    if(e.code == "ArrowLeft") {
      if(counter != 0) {
        setCounter(counter-=1)
        form.style.width  = "1px"
        const lastChild = tagList.querySelectorAll("#child")[counter]
        tagList.insertBefore(form, lastChild)
        input.focus()
      }
    }

    if(e.code == "ArrowRight") {
      if(counter < totalCounter) {
        setCounter(counter+=1)
        const lastChild = tagList.querySelectorAll("#child")[counter]
        console.log(lastChild)
        tagList.insertBefore(form, lastChild)
        input.focus()
        if(counter >= totalCounter) form.style.width  = "auto" 
      }
    }

    // if(e.code == "Backspace" && !input.value) {
    //   dispatch(deleteTag(tags.length - 1))
    // }
  }

  const onChange = e => {
    const form = document.querySelector("#form")
    const input = form.querySelector("input")
    console.log(input.scrollWidth)
    if(e.nativeEvent.inputType == "deleteContentBackward") {
      form.style.width  = (input.scrollWidth - 10) + "px"
    }else{
      form.style.width  = input.scrollWidth + "px"
    }
  }

  // const onChange = e => {
  //   const form = document.querySelector("form")
  //   if(MATH_OPERATORS.includes(e.target.value)) {
  //     dispatch(addTag({text: e.target.value, value: 0}))
  //     form.reset()
  //   }

  //   const suggestion_menu = document.querySelector("#suggestion_menu")
  //   setNewTag(e.target.value)
  //   if(tags.some(tag => tag.text.split("").includes(e.target.value))) {
  //     suggestion_menu.setAttribute("class", "visible absolute left-3 w-full h-52 border border-slate-300")
  //   }else{
  //     suggestion_menu.setAttribute("class", "invisible absolute left-3 w-full h-52 border border-slate-300")
  //   }
  // }

  // const onSubmit = e => {
  //   e.preventDefault()
  //   newTag && !tags.find(tag => tag.text == newTag) && dispatch(addTag({text: newTag, value: 0}))
  //   e.target.reset()
  // }
  
  return (
    <div className="flex flex-wrap items-center p-5 border border-slate-400">
      <ul id='tag_list' className="flex flex-wrap items-center gap-3 text-xl">
        {
          tags 
          &&
          tags.map(tag => (
            <>
              <li id='child' className="flex rounded-md p-2 font-semibold cursor-pointer">
                {tag.text}
              </li>
              <>
              {
                tag.type == "function"
                &&
                <>
                  <p id='child'>(</p> <p id='child'>)</p>
                </>
              }
              </>
            </>
          ))
        }
        <form id='form' className="relative">
          <input 
            type="text" 
            id='input'
            className="ml-3 outline-none text-xl w-full"
            onChange={onChange}
            onKeyDown={onKeyDown} 
            // onSubmit={onSubmit} on the form
          />
          <div id='suggestion_menu' className="invisible absolute left-3 w-full h-52 border border-slate-300"></div>
        </form>
      </ul>
    </div>
  )
}