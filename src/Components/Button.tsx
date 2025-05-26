
type ButtonProps = {
   id:number;
    text: string;
  onAdd: (id: number) => void
  }

const Button = ({id,text,onAdd}:ButtonProps) => {

  
  return (
    <div>
        <button className="bankCardBtn" onClick={()=>onAdd(id)}>
            {text}
        </button>
    </div>
  )
}

export default Button