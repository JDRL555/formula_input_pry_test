import { useSelector }                      from 'react-redux'
import Formula                              from '../components/Formula'

export default function FormulaContainer() {
  
  const formulas = useSelector(state => state.formula.value)

  return (
    <div className="w-3/4 p-10 border border-zinc-300 h-2/3 overflow-y-auto">  
      {
        formulas.map(formula => <Formula formula={formula} />)
      }
    </div>
  )
}
