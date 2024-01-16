"use client"
import { use, useState } from "react"

export default function NavBar(){

    const [isMenuOpen1, setMenuOpen1] = useState(false)
    const [isMenuOpen2, setMenuOpen2] = useState(false)

    function handleClick1(){
        setMenuOpen1(!isMenuOpen1);
    }

    function handleClick2(){
        setMenuOpen2(!isMenuOpen2)
    }
    return(
        <>
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={handleClick1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl tracking-widest">Keiru_Jun.portfolio</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={handleClick2}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                </div>
            </div>
            <div className="menu_wrapper absolute flex w-full justify-between">
            {
                        isMenuOpen1 ? (
                            <div className="menu">
                                <ul className="menu bg-base-200 w-56 rounded-box">
                                    <li><a id="#abouts">About Us</a></li>
                                    <li><a id="skills">Skills</a></li>
                                    <li><a id="contacts">Contacts</a></li>
                                </ul>
                            </div>
                        ) : <div/>
            }
            {
                isMenuOpen2 && (
                    <div className="menu">
                        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 w-20 rounded-box">
                            <li><a>1</a></li>
                            <li><a>2</a></li>
                            <li><a>3</a></li>
                        </ul>
                    </div>
                )   
            }

            </div>
        </>
    )
}