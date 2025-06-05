
type AlertProps = {
    text: string;
    show: boolean;
    
}

const Alert = ({ text, show }: AlertProps) => {


    return (

        show && (
            <div style={{ border: "1px solid black", padding: "20px", borderRadius: "10px", backgroundColor:"#55394D", color: "white", fontSize:"small", }}>
                {text}
            </div>
        )

    )
}

export default Alert