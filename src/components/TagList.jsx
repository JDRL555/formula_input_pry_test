import { useState } from 'react'
import TagInput     from './TagInput'

export default function TagList({ hidden, tags, index }) {

  let [inputCounter, setInputCounter] = useState(1)

  const addTimeSegment = () => {
    inputCounter != 2 && setInputCounter(inputCounter+=1)
  }

  return (
    <div className={`tag_container border border-zinc-300 p-5 pb-1 items-start ${hidden && "invisible"}`}>
     {
       inputCounter == 1
       ?
       <TagInput tags={tags} index={index} />
       :
       <>
        <TagInput tags={tags} index={index} />
        <TagInput tags={tags} index={index} />
       </>
     }
      <p 
        className='text-sm text-blue-600 m-3 cursor-pointer w-48'
        onClick={addTimeSegment}
      >
        <i class="fa-solid fa-plus text-sm text-blue-600 m-3 cursor-pointer"></i> Add time segment
      </p>
    </div>
  )
}
