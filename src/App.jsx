import FormulaContainer from './components/FormulaContainer'
import TagList          from './components/TagList'

export default function App() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-semibold'>Formula input</h1>
      <FormulaContainer />
    </div>
  )
}
