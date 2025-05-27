import { useState } from "react"


type ButtonProps = {
   id:number;
    text: string;
  onAdd: (id: number) => void
  onRemove: (id: number) => void
  }

const Button = ({id,text,onAdd, onRemove}:ButtonProps) => {

  
  return (
    <div>
      <button className="bankCardBtnAdd" onClick={() => onAdd(id)}> Compare </button>
      <button className="bankCardBtnRemove" onClick={() => onRemove(id)}> Remove </button>
    </div>
  )
}

export default Button