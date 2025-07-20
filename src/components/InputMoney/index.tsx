import { useState, type InputHTMLAttributes } from 'react';
import { Input } from '../Input';

type InputMoneyProps = InputHTMLAttributes<HTMLInputElement>

export function InputMoney({ type, onChange, onBlur, value, ...props}: InputMoneyProps) {
  const [valor, setValor] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = e.target.value
      .replace(/[^\d,]/g, '')
      .replace(/(,.*),/g, '$1')
    
    setValor(valorFormatado);
  };

  return (
    <Input
      value={valor}
      onChange={handleChange}
      {...props}
    />
  );
}