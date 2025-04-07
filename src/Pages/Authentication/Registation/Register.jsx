
import { useForm } from "react-hook-form";
import mainLogo from "../Login/Logo-removebg-preview.png"
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="bg-[url(https://i.ibb.co.com/wN9dqmSX/8270289.jpg)] bg-cover bg-fixed py-12 ">
            <div className="md:flex items-center w-11/12 mx-auto  gap-12 shadow-cyan-900 shadow-2xl md:my-8 md:py-8 my-4 py-4">
                <div className="hidden md:block text-center w-6/12 mx-16 ">
                    <div className="flex justify-center items-center">
                        <img className="md:w-[170px] md:h-[65px] h-[40px] w-[90px] md:mb-2 mb-0" src={mainLogo} alt="mainLogo" />
                    </div>
                    <h2 className="text-5xl font-semibold py-4">Hello</h2>
                    <h1 className="text-6xl font-semibold">Welcome!</h1>
                    <h4 className="font-bold pt-4">Create an Account</h4>
                    <p className="py-4">Sign up to access all features and stay connected.
                    It only takes a minute to get started!</p>
                </div>
                <div className="md:hidden block">
                    <div className="flex justify-center items-center">
                        <img className=" h-[80px] w-[120px] md:mb-2 mb-0" src={mainLogo} alt="mainLogo" />
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="md:w-[30%] w-[90%] mx-auto">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-bold text-lg">Name</label>
                            <input {...register("name")} type="text" className="input input-primary w-full" placeholder="Enter your name" />
                            <label className="fieldset-label font-bold text-lg">Photo URL</label>
                            <input {...register("photo")} type="text" className="input input-primary w-full" placeholder="Enter photo URL" />
                            <label className="fieldset-label font-bold text-lg">Email</label>
                            <input {...register("email")} type="email" className="input input-primary w-full" placeholder="Email" />
                            <label className="fieldset-label font-bold text-lg">Password</label>
                            <input {...register("password")} type="password" className="input input-primary w-full" placeholder="Password" />
                            <button className="btn btn-primary mt-6 ">Register</button>
                        </fieldset>
                        <p className="pt-2 md:text-lg ">You have an account! <Link to="/login"><span className="hover:underline  text-white pl-2"> Login Now</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;