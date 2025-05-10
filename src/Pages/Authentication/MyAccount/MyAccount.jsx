import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Register from "./Register";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import Dashboard from "../../Dashboard/Dashboard";

const MyAccount = () => {
    const { signInWithGoogle, loginUser, user } = useAuth();
    console.log(user);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const password = data.password;
        const email = data.email;
        loginUser(email, password)
            .then(() => {
                toast.success("Sign in successful")
            })
            .catch(error => {
                toast.error(error)
            })
    };


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                toast.success("Sign in successful")
            })
            .catch(error => {
                toast.error(error)
            })
    }




    const [loginPassword, setLoginPassword] = useState(true);
    const handleLoginInputType = () => {
        setLoginPassword(!loginPassword);
    }


    return (
        <div>
            {
                user ?
                    <div>
                        <Dashboard></Dashboard>
                    </div>
                    :
                    <div className="bg-gradient-to-r from-[#ede7f7] to bg-[#fae8e8] py-8">
                        <div className="md:w-11/12 mx-auto w-full">
                            <h1 className="text-4xl font-semibold pt-4 pl-10 text-[#360f7e]">My account</h1>
                            <div className="md:flex items-start justify-between min-h-screen py-8 relative">

                                {/* login container */}
                                <div className="p-4 flex-1">
                                    <h3 className="text-2xl font-semibold pl-6">Login</h3>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="card-body">
                                            <fieldset className="fieldset relative">
                                                <label className="text-lg py-2">Email</label>
                                                <input {...register("email")} type="email" className="border border-gray-400 py-2 rounded-sm w-full text-[14px] px-2" />

                                                <label className="text-lg py-2">Password</label>
                                                <button onClick={handleLoginInputType} className="absolute text-2xl top-[156px] right-4 cursor-pointer">
                                                    {loginPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                                </button >
                                                <input {...register("password")} type={loginPassword ? "password" : "text"} className="border border-gray-400 py-2 rounded-sm w-full text-md text-[14px] px-2" />
                                                <label className="fieldset-label text-black text-lg py-4">
                                                    <input type="checkbox" defaultChecked className="checkbox" />
                                                    Remember me
                                                </label>
                                                <div className="flex items-center justify-between mt-4">
                                                    <button className=" bg-[#360f7e] py-2 px-4 rounded-sm text-white cursor-pointer text-lg">Sign in</button>
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-lg">Or Sign in with</p>
                                                        <span onClick={handleGoogleLogin} className="md:text-4xl text-2xl cursor-pointer"><FcGoogle /></span>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </form>
                                </div>

                                {/* vertical border */}
                                <div className="hidden md:block w-px bg-gray-400 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>

                                {/* register container */}
                                <div className="p-4 flex-1">
                                    <Register></Register>
                                </div>

                            </div>
                        </div>
                    </div>
            }
        </div>
    );

};

export default MyAccount;