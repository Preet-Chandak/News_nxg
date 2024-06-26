import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-gray-300 fixed w-full top-0 shadow-lg z-50">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Home</a></li>
                <li>
                <a>Categories</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">Nxg Ventures</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a href='/home'>Home</a></li>
            <li>
                <details>
                <summary>Categories</summary>
                <ul className="p-2">
                    <li><a>1</a></li>
                    <li><a>2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        <div className="navbar-end">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
    </div>
  )
}

export default Navbar
