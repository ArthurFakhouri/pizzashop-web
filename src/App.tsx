import '@/global.css'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Hello World</h1>
      <Button>Send</Button>
    </div>
  )
}
