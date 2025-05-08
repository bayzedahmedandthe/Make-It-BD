import {  useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";


const Register = () => {

    const { createUser, updateUser, setUser } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        const password = data.password;
        const email = data.email;

        if (password.length < 6) {
            return toast.error("password must be 6 character");
        };

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        if (!passwordRegex.test(password)) {
            return toast.error("password must be one uppercase one lowercase")
        };

        createUser(email, password)
            .then(result => {
                console.log(result);
                toast.success("Registstion successful")
                updateUser({ email: email })
                    .then(() => {
                        setUser((previousUser) => { return { ...previousUser, email: email } });
                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(error => {
                toast.error("auth/email-already-in-use")
            })

    };

    const [password2, setPassword2] = useState(true);
    const handleInputType2 = () => {
        setPassword2(!password2);
    }
    return (
        <div>
            <h3 className="text-2xl font-semibold pl-6">Register</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <fieldset className="fieldset relative">
                        <label className=" text-lg py-2">Email</label>
                        <input {...register("email")} type="email" className="border border-gray-400 py-2  rounded-sm w-full text-[14px] px-2" />

                        <label className="text-lg py-2">Password</label>
                        <button onClick={handleInputType2} className="absolute text-2xl top-[156px] right-4 cursor-pointer">
                            {password2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </button >
                        <input {...register("password")} type={password2 ? "password" : "text"} className="border border-gray-400 py-2 rounded-sm w-full text-md text-[14px] px-2" />
                        <p className="text-lg">Create your account to get started with full access and personalized features.</p>

                    </fieldset>
                    <div className="flex items-center justify-start">
                        <button className="mt-4 bg-[#360f7e] py-2 px-4 rounded-sm text-white text-lg cursor-pointer">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;