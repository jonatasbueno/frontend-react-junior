import type { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className="border border-neutral-50 rounded h-10 p-1.5" {...props}/>
  )
}