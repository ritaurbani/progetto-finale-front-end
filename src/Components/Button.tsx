
type ButtonProps = {
    text: string
}

const Button = ({text}:ButtonProps) => {
  return (
    <div>
        <button>
            {text}
        </button>
    </div>
  )
}

export default Button