
type ButtonProps = {
   id:number;
    text: string;
    onAdd: ()=> {}
}

const Button = ({id,text,onAdd}:ButtonProps) => {

  
  return (
    <div>
        <button onClick={()=>onAdd(id)}>
            {text}
        </button>
    </div>
  )
}

export default Button