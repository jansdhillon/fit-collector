import React from "react";
import { Shirt } from "lucide-react";
import Image from "next/image";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 h-5">
        <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case" href="/">Fit Collector</a>
        </div>
        <div className="flex-none gap-2">
        <div className="form-control">
            <input
            type="text"
            placeholder="Search"
            className="input-bordered input"
            />
        </div>
        <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className=" w-auto rounded-full ">
                <Image 
                         src="/pfp.png"
                        alt="pfp"
                        width={30}
                        height={30}
                />
            </div>
            </label>
            <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
            <li>
                <a className="justify-between">
                Profile
                <span className="badge">New</span>
                </a>
            </li>
            <li>
                <a>Settings</a>
            </li>
            <li>
                <a>Logout</a>
            </li>
            </ul>
        </div>
        </div>
        </div>
    );
}; 

export default Navbar; 