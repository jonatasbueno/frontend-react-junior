import { useRef, type FormEvent } from 'react';

import { useProducts } from './hooks/useProducts'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { InputMoney } from './components/InputMoney';

type FormValues = {
  nome: string,
  preco: string
  sku: string
}

function App() {
  const { addProduct, products, removeProduct, hasProduct } = useProducts()
  const formRef = useRef<HTMLFormElement>(null);
 

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(formRef.current!)
    const data = Object.fromEntries(formData.entries()) as FormValues;

    addProduct(data)
  }

  return (
    <div className='bg-neutral-600 text-neutral-50 m-6 p-4 flex flex-col gap-4 rounded-lg'>
      <h1 className='text-2xl font-bold w-full'>Teste Técnico Frontend</h1>

      <form className='w-full flex gap-4' ref={formRef} onSubmit={handleSubmit}>
        <Input name='nome' required placeholder='Nome'/>
        <InputMoney name='preco' required placeholder='Preço'/>
        <Input name='sku' required placeholder='SKU'/>
        <Button type='submit'>Adicionar</Button>
      </form>

      {hasProduct && <div className='rounded border border-neutral-50 p-4'>
        {products!.map(product => (
          <div key={product.sku} className='flex flex-col'>
            <div className='flex justify-between items-center h-12'>
              <span>{product.nome}</span>
              <span>{product.preco}</span>
              <span>{product.sku}</span>
              <Button type='button' onClick={() => removeProduct(product.sku)}>Excluir</Button>
            </div>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default App
