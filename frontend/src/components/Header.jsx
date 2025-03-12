import React, { useState } from "react"
import NavElements from "./NavElements"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"


export default function Header() {

    const [menu, setMenu] = useState(false)
    function toggleMenu(e) {
        e.preventDefault()
        setMenu(!menu)
    }




    return (
        <header className="flex  w-full px-3 z-50 sticky top-0 bg-body-bg shadow-md border-b-[1px] border-black">
            <Link className="site-logo z-50" to="/">VanLife</Link>

            <nav className=" hidden sm:flex items-center z-50 -translate-x-5">
                <NavElements></NavElements>
            </nav>
            <nav className="sm:hidden shadow-sm">

                <RxHamburgerMenu size={30} className={`${menu ? 'hidden' : ''} cursor-pointer z-20`} onClick={toggleMenu} />
                <AiOutlineClose size={30} className={`${menu ? '' : 'hidden'} cursor-pointer z-20`} onClick={toggleMenu} />

                <nav className={`${menu ? '' : 'hidden'} absolute top-0 left-0  translate-y-[70px] bg-body-bg w-[100vw] items-evenly flex items-end  flex-col z-20`}>
                    <NavElements mobile={true}></NavElements>
                </nav>
                <div className={`${menu ? '' : "hidden"} translate-y-[70px] w-screen h-screen absolute top-0 left-0 z-18 bg-black/40`} onClick={() => { setMenu(false) }}></div>
            </nav>
        </header>
    )
}