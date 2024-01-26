import { Link } from "react-router-dom";
import "./aboutSec1.scss"
import "../../Home/components/firstSection.scss"
import React from 'react';
import logo from '../../../assets/img/layl-logo.png';
import { FaSearch } from "react-icons/fa";

export const AboutSec1 = () => {
    return (
        <>
            <nav className="h-24 bg-[#0b0b0b] flex flex-row items-center justify-center p-7 ">
                <Link className='' to={"/"}>
                    <img className='w-20 absolute left-0 ms-5 top-4' src={logo} alt="" />
                </Link>
                <div className="flex flex-row items-center gap-2 ">

                </div>
            </nav>
            
            <div className="h-screen flex justify-center items-center ">
                <div className="bg-slate-50 w-[800px] h-[500px]">
                    <div className="">
                        
                    </div>

                    <div className="">

                    </div>
                </div>
            </div>
            
        </>
    );
};

