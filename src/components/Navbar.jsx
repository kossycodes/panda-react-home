import React from "react"
import logo from "../assets/pandalogo.png";

export default function Navbar() {

    const [nav, setNav] = React.useState(false)
    const  handleNav = () => {
        setNav(!nav)
    }


    return (
        <header>
            <nav className="flex  justify-between px-10 pt-7 align-middle items-center pad">
            <div>
                <img src={logo} alt="logo" />
                
            </div>
            <div className="flex items-center align-middle gap-3  ">
                <button className="font-space  md:font-space  btn">connect with pandascrow</button>

            </div>
        </nav>
        </header>
    )


}