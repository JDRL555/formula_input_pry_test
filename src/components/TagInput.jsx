export default function TagInput({ tags, setTags }) {

  return (
    <>
      <div className="flex flex-wrap p-5 border border-slate-400">
        <ul className="flex flex-wrap gap-3 text-xl">
          {tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
        <div className="relative">
          <input type="text" className="ml-3 outline-none text-xl w-full" />
          <div className="absolute left-0 autocomplete w-full h-52 border border-slate-300"></div>
        </div>
      </div>
    </>
  )
}