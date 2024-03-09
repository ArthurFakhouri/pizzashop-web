import '@/global.css'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>Hello World</h1>
      <Button>Send</Button>
    </div>
  )
}
