import './App.css'
import { useState } from 'react'
import { Button} from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  const [count, setCount] = useState(0)
  return (
      <div className="border-4 border-solid border-red-500 p-6 text-2xl font-bold bg-grey-100">
        <Input value={count} 
                onChange={e => e.target.value}/>
        <Button onClick={() => setCount(count + 1) }>+</Button>
        <Button onClick={() => setCount(count - 1) }>-</Button>
      </div>
  )
}

export default App
