import type { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className="bg-neutral-50 rounded text-black p-1.5 cursor-pointer"{...props}/>
}                          