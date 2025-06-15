import { Link } from "react-router-dom"

type AlertProps = {
    text: string;
    show: boolean;
    
}

const Alert = ({ text, show }: AlertProps) => {


    return (

        show && (
            <div className="alertBox">
                <Link style={{textDecoration:"none", color:"white"}} to={"/favourites"}>{text}</Link>  
            </div>
        )

    )
}

export default Alert