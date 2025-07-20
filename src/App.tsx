import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {
  return (
    <div className='bg-neutral-600 text-neutral-50 m-6 p-4 flex flex-col gap-4 rounded-lg'>
      <h1 className='text-2xl font-bold w-full'>Teste Técnico Frontend</h1>
      <div className='w-full flex gap-4'>
        <Input/>
        <Input/>
        <Input/>
        <Button>Adicionar</Button>
      </div>
      {/* {list.length > 0 && list.map(product => ())} */}
    </div>
  )
}

export default App
