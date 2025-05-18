import { NavLink } from "react-router-dom"

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
                <ul>
                    {
                        navLinks.map((curLink, index) => (
                            <li key={index}>
                                <NavLink to={curLink.path}>{curLink.title}</NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        </>
    )
}


export default AppHeader