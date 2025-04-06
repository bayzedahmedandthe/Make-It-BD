import { useForm } from "react-hook-form";
import mainLogo from "../Login/Logo-removebg-preview.png"

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="bg-[url(https://i.ibb.co.com/n8f5g0T1/5559852.jpg)] py-12 min-h-screen">
            <div className="flex items-center md:w-11/12 mx-auto w-full shadow-cyan-900 shadow-2xl min-h-screen">
                <div className="hidden md:block text-center px-20">
                    <div className="flex justify-center items-center">
                        <img className="md:w-[170px] md:h-[65px] h-[40px] w-[90px] md:mb-2 mb-0" src={mainLogo} alt="mainLogo" />
                    </div>
                    <h2 className="text-5xl font-semibold py-4">Hello</h2>
                    <h1 className="text-6xl font-semibold">Welcome!</h1>
                    <p className="py-4">This login page is designed to securely authenticate users before giving them access to the system. It features a modern, clean, and responsive design. Users can log in using their email and password, and error messages are displayed for invalid inputs.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-20">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label font-bold text-lg">Email</label>
                            <input {...register("email")} type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label font-bold text-lg">Password</label>
                            <input {...register("password")} type="password" className="input " placeholder="Password" />
                            <button className="btn btn-primary mt-4 ">Login</button>
                        </fieldset>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;