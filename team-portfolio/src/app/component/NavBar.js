"use client"
import { useState, useEffect } from "react"
import Link from "next/link";
import NavLink from "./NavLink";



const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

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
            <div className="navbar">
                <div className="flex-none bg-[#19191a]">
                    <button className="btn btn-square btn-ghost" onClick={handleClick1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl tracking-widest"
                          href={"/"}>
                            Keiru_Jun.portfolio
                    </Link>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={handleClick2}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                    </button>
                </div>
            </div>
            <div className="menu_wrapper absolute flex w-full justify-between">
            {
                        isMenuOpen1 ? (
                            <div className="menu">
                                <ul className="menu bg-base-200 w-30 rounded-box">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink href={link.path} title={link.title} />
                                    </li>
                                ))}
                                </ul>
                            </div>
                        ) : <div/>
            }
            {
                isMenuOpen2 && (
                    <div className="menu mr-3">
                        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 w-20 rounded-box">
                            <li>
                                <a>
                                    <label className="swap swap-rotate">
    
                                        <input type="checkbox" className="theme-controller" value="synthwave" />
                                        
                                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

                                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                                        
                                    </label>
                                </a>
                            </li>
                        </ul>
                    </div>
                )   
            }
            </div>
            
        </>
    )
}