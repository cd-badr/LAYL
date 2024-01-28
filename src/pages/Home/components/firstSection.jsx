import './firstSection.scss'
import logo from '../../../assets/img/layl-logo.png';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
export const FirstSection = () => {
    return (
        <>

            <nav className="h-24 bg-[#ffe100c3] flex flex-row items-center sm:justify-center justify-between p-7">
            <Link className='' to={"/"}>
                <img className='w-20 absolute left-0 ms-5 top-4' src={logo} alt="" />
            </Link>
                <div className="flex flex-row items-center gap-2 ">
                    <input className='h-14 sm:w-[40vw] w-[100%]  rounded-3xl bg-slate-50 p-5 text-xl active:border-none active:outline-none border-none outline-none ' type="text" autoFocus />
                    <FaSearch className='text-black size-8 ps-3 absolute sm:right-[31%] right-[10%] border-l-2 border-black' />
                </div>
            </nav>

            <div className="">
                <div className="divs flex flex-row flex-wrap justify-center  gap-10  p-5 ">
                    <div className="film1 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                
                                <div className=' flex flex-col justify-center justify-between h-[240px] p-3'>
                                    <h1 className='text-2xl'>True Detective</h1>
                                    <p className='opacity-70'>True Detective est une anthologie télévisée
                                        américaine, créée et écrite par Nic Pizzolatto
                                        et réalisée par Cary Fukunaga pour la première
                                        saison,<br /> ...</p>
                                    <p className='opacity-50'>"2014"</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="film2 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className=' flex flex-col justify-center justify-between h-[240px] p-3 '>
                                    <h1 className='text-2xl'>Interstellar</h1>
                                    <p className='opacity-70'>Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille 
                                    récemment découverte dans l’espace-temps afin de repousser les limites humaines et
                                     partir à la. <br />...</p>
                                    <p className='opacity-50'>"2014"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film3 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className=' flex flex-col justify-center justify-between h-[240px] p-3 '>
                                    <h1 className='text-2xl'>Fight Club</h1>
                                    <p className='opacity-70'>Le narrateur, sans identité précise, vit seul, travaille seul, 
                                    dort seul, mange seul ses plateaux-repas pour une personne comme beaucoup d'autres 
                                    personnes seules qui connaissent la misère humaine,<br />  ...</p>
                                    <p className='opacity-50'>"1999"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film4 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className='flex flex-col justify-center justify-between h-[240px] p-3 '>
                                    <h1 className='text-2xl'>Scareface</h1>
                                    <p className='opacity-70'>En 1980, Tony "Scarface" Montana bénéficie d'une amnistie du 
                                    gouvernement cubain pour retourner en Floride. Ambitieux et sans scrupules,
                                     il élabore un plan pour éliminer un caïd <br /> ...</p>
                                    <p className='opacity-50'>"1984"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film5 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className='flex flex-col justify-center justify-between h-[240px] p-3 '>
                                    <h1 className='text-2xl'>Forrest Gump</h1>
                                    <p className='opacity-70'>Quelques décennies d'histoire américaine, des années 1940
                                     à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple 
                                     et pur, Forrest Gump. <br /> ...</p>
                                    <p className='opacity-50'>"1994"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film6 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className='flex flex-col justify-center justify-between h-[240px] p-3 '>
                                    <h1 className='text-2xl'>Cast Away</h1>
                                    <p className='opacity-70'>Chuck Noland, un cadre de Fedex, sillonne le monde pour
                                     améliorer les performances de son entreprise et la productivité de ses équipes.
                                      Il ne trouve la tranquillité <br />  ...</p>
                                    <p className='opacity-50'>"2001"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
