import { GoBook } from "react-icons/go";
import mainLogo from "../assets/Logo-removebg-preview.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-[#ede7f7] to bg-[#fae8e8]">
            <div className="navbar md:w-11/12 mx-auto w-full ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost mt-6 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gradient-to-r from-[#ede7f7] to bg-[#fae8e8] shadow-2xl z-1 mt-3 w-52 p-2 ">
                            <li><a>Home</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Success Story</a></li>
                            <li><a>Freelancing</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className=" "><img className="md:w-[170px] md:h-[65px] h-[40px] w-[90px] md:mb-2 mb-0" src={mainLogo} alt="mainLogo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-6 px-1 pt-8 ">
                        <li className="hover:text-blue-500 cursor-pointer"><NavLink to="/">Home</NavLink></li>
                        <li className="hover:text-blue-500 cursor-pointer"><NavLink to="/aboutus">About Us</NavLink></li>
                        <li className="hover:text-blue-500 cursor-pointer"><NavLink to="/sucess">Success Story</NavLink></li>
                        <li className="hover:text-blue-500 cursor-pointer"><NavLink to="/freelancing">Freelancing</NavLink></li>
                        <li className="hover:text-blue-500 cursor-pointer"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center justify-center gap-4">
                        <NavLink to="/browse">
                            <div className="pt-2 hover:text-blue-500 cursor-pointer">
                                <p className="flex justify-center items-center"><GoBook></GoBook></p>
                                <h3>Browse Course</h3>
                            </div>
                        </NavLink>
                       <NavLink to="/login"><p className="pt-6">Login</p></NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;