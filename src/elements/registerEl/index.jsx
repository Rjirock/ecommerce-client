'use client'

import Input from "../InputEl/InputEl";

const RegisterEl= () => {

    return (
        <div className="px-4 py-12 flex justify-center items-center bg-[#f2f2f2]">
            <div className="flex flex-col gap-4 justify-center bg-white shadow-lg p-8 rounded-xl">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-black text-center">Create an Account</h2>
                    <p className="text-base text-[#71717a] text-center">
                        Enter your detail below to create new account
                    </p>
                </div>

                <form action="" className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Input type='text' name ='first_name' ph='First Name'/>
                        <Input type='text' name ='last_name' ph='Last Name'/>

                    </div>
                    <Input type='email' name ='email' ph='Email'/>
                    <Input type='password' name ='password' ph='Password'/>
                    <button 
                        type="submit" 
                        className={`p-2 rounded-md bg-slate-900 text-white font-semibold active:scale-95`
                        }
                    >
                        Sign-In
                    </button>
                </form>

                <div className="flex items-center justify-center gap-2">
                    <div className="w-[30%] h-px bg-[#71717ab9]"></div>
                    <span className="text-xs text-[#71717a] capitalize">or continue with socials</span>
                    <div className="w-[30%] h-px bg-[#71717a]"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <button 
                    type="button"
                    className="p-1 rounded-md active:scale-95 border shadow-sm font-semibold"
                    >
                        Google
                    </button>

                    <button 
                    className="p-1 rounded-md active:scale-95 border shadow-sm font-semibold"
                    type="button"
                    >
                        Facebook
                    </button>
                    <p className="text-sm self-center">
                        Already have an account?<span className="text-blue-600 cursor-pointer">log In</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterEl;