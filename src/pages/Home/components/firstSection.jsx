import './firstSection.scss'
import logo from '../../../assets/img/layl-logo.png';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
export const FirstSection = () => {
    return (
        <>

            <nav className="h-24 bg-[#0b0b0b] flex flex-row items-center justify-center p-7">
            <Link className='' to={"/"}>
                <img className='w-20 absolute left-0 ms-5 top-4' src={logo} alt="" />
            </Link>
                <div className="flex flex-row items-center gap-2 ">
                    <input className='h-14 w-[40vw] rounded-3xl bg-slate-50 p-5 text-xl  ' type="text" autoFocus />
                    <FaSearch className='text-black size-8 ps-3 absolute right-[31%] border-l-2 border-black' />
                </div>
            </nav>

            <div className="">
                <div className="divs flex flex-row flex-wrap justify-center  gap-10  p-5 ">
                    <div className="film1 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className='p-3'>
                                    <h1 className='text-2xl'>True Detective</h1>
                                    <p className='opacity-70'>True Detective est une anthologie télévisée
                                        américaine, créée et écrite par Nic Pizzolatto
                                        et réalisée par Cary Fukunaga pour la première
                                        saison, ...</p>
                                    <p className='opacity-50'>"2014"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film1 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className='p-3'>
                                    <h1 className='text-2xl'>True Detective</h1>
                                    <p className='opacity-70'>True Detective est une anthologie télévisée
                                        américaine, créée et écrite par Nic Pizzolatto
                                        et réalisée par Cary Fukunaga pour la première
                                        saison, ...</p>
                                    <p className='opacity-50'>"2014"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film1 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className='p-3'>
                                    <h1 className='text-2xl'>True Detective</h1>
                                    <p className='opacity-70'>True Detective est une anthologie télévisée
                                        américaine, créée et écrite par Nic Pizzolatto
                                        et réalisée par Cary Fukunaga pour la première
                                        saison, ...</p>
                                    <p className='opacity-50'>"2014"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film1 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className='p-3'>
                                    <h1 className='text-2xl'>True Detective</h1>
                                    <p className='opacity-70'>True Detective est une anthologie télévisée
                                        américaine, créée et écrite par Nic Pizzolatto
                                        et réalisée par Cary Fukunaga pour la première
                                        saison, ...</p>
                                    <p className='opacity-50'>"2014"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film1 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className='p-3'>
                                    <h1 className='text-2xl'>True Detective</h1>
                                    <p className='opacity-70'>True Detective est une anthologie télévisée
                                        américaine, créée et écrite par Nic Pizzolatto
                                        et réalisée par Cary Fukunaga pour la première
                                        saison, ...</p>
                                    <p className='opacity-50'>"2014"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film1 film text-center ">
                        <div className='relative film-div'>
                        <Link className="div-btn" to={"/about"}>More info</Link>
                            <div className='div-filter'>
                                <div className='img'></div>
                                <div className='p-3'>
                                    <h1 className='text-2xl'>True Detective</h1>
                                    <p className='opacity-70'>True Detective est une anthologie télévisée
                                        américaine, créée et écrite par Nic Pizzolatto
                                        et réalisée par Cary Fukunaga pour la première
                                        saison, ...</p>
                                    <p className='opacity-50'>"2014"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
