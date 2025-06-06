import { Link } from "react-router-dom"

type AlertProps = {
    text: string;
    show: boolean;
    
}

const Alert = ({ text, show }: AlertProps) => {


    return (

        show && (
            <div style={{ border: "1px solid black", padding: "20px", borderRadius: "10px", backgroundColor:"#55394D", color: "white", fontSize:"small", }}>
                <Link style={{textDecoration:"none", color:"white"}} to={"/favourites"}>{text}</Link>  
            </div>
        )

    )
}

export default Alert