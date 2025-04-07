import { useForm } from "react-hook-form";
import mainLogo from "../Login/Logo-removebg-preview.png"
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="bg-[url(https://i.ibb.co.com/n8f5g0T1/5559852.jpg)] bg-cover bg-fixed py-8 h-screen">
            <div className="md:flex items-center w-11/12 mx-auto  gap-12 shadow-cyan-900 shadow-2xl my-20  ">
                <div className="hidden md:block text-center w-6/12 mx-16 ">
                    <div className="flex justify-center items-center">
                        <img className="md:w-[170px] md:h-[65px] h-[40px] w-[90px] md:mb-2 mb-0" src={mainLogo} alt="mainLogo" />
                    </div>
                    <h2 className="text-5xl font-semibold py-4">Hello</h2>
                    <h1 className="text-6xl font-semibold">Welcome back!</h1>
                    <p className="py-4">Log in to continue where you left off.
                    We're glad to see you again!</p>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center">
                        <img className=" h-[70px] w-[120px] md:mb-2 mb-0" src={mainLogo} alt="mainLogo" />
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="md:w-[30%] w-[90%] mx-auto">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-bold text-lg">Email</label>
                            <input {...register("email")} type="email" className="input input-primary w-full" placeholder="Enter your email" />
                            <label className="fieldset-label font-bold text-lg">Password</label>
                            <input {...register("password")} type="password" className="input input-primary w-full" placeholder="Password" />
                            <button className="btn btn-primary mt-6 ">Login</button>
                        </fieldset>
                        <button className="flex items-center justify-between">
                        <p className="text-lg">Or login with</p>
                        <span className="text-3xl bg-white rounded-full cursor-pointer"><FcGoogle /></span>
                        </button>
                        <p className="pt-2 md:text-lg ">New to this website! <Link to="/register"><span className="hover:underline  text-white pl-2"> Register Now</span></Link></p>
                    </div>
                </form> 
            </div>
        </div>
    );
};

export default Login;