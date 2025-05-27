import { NavLink } from "react-router-dom"
// import logo from "/img/bank.jpg"

function AppHeader() {

    const navLinks = [

        {
            path: "/",
            title: "Home"
        },
        {
            path: "/productsdetails",
            title: "ProductDetails"
        }


    ]

    return (
        <>
            <nav className="navBar">
                <div className="logoContent">
                    <div>
                        <img src="/img/bank.jpg" alt="Logo" width="100" height="100" className="d-inline-block " />
                    </div>
                    <div>
                        <h3 className="logo">Rate</h3>
                        <h3 className="logo">Compare</h3>
                    </div>
                </div>
                <ul>
                    {
                        navLinks.map((curLink, index) => (
                            <li key={index}>
                                <NavLink to={curLink.path}>{curLink.title}</NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav >
        </>
    )
}


export default AppHeader