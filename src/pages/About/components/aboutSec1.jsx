import { Link } from "react-router-dom";
import "./aboutSec1.scss"
import "../../Home/components/firstSection.scss"
import React from 'react';
import logo from '../../../assets/img/layl-logo.png';
import { FaSearch } from "react-icons/fa";

export const AboutSec1 = () => {
    return (
        <>
            <nav className="h-24 bg-[#ffe100c3] flex flex-row items-center justify-center p-7 ">
                <Link className='' to={"/"}>
                    <img className='w-20 absolute left-0 ms-5 top-4' src={logo} alt="" />
                </Link>
                <div className="flex flex-row items-center gap-2 ">

                </div>
            </nav>
            
            <div className="h-[85vh] flex justify-center items-center ">
                <div className="bg-slate-50 w-[800px] h-[500px] flex flex-row justify-between rounded-lg">

                    <div className="film-img rounded-l-lg">

                    </div>

                    <div className="flex justify-center  text-center w-1/2 p-5 flex-col justify-evenly">
                        <h1 className="text-2xl">True Detective</h1>
                        <p className="opacity-75">Interrogés par les autorités, Martin Hart et Rust Cohle se remémorent
                             leur enquête la plus célèbre. Pour ces ex-partenaires de la Division 
                             des Enquêtes Criminelles de Louisiane, tout a commencé 17 ans plus tôt… 
                             En 1995, Dora Lange, une prostituée, est découverte atrocement assassinée 
                             ; la mise en scène du cadavre laisse penser qu’un tueur en série aux rituels
                              occultes sévirait en Louisiane. Dès lors, la traque de l’assassin devient
                               une véritable obsession pour Martin et Rust, au risque de 
                               détruire leurs vies privées.</p>
                            <p className="opacity-50">"12 janvier 2014"</p>
                    </div>
                </div>
            </div>
            
        </>
    );
};

