
import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false);
    
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState('student')
    function changeHandler(e) {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value

            }
        ))
    }


    function submitHandler(e) {
        e.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error('Password do not match');
            return;
        }
        setIsLoggedIn(true);
        toast.success('Account Created');
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log('printing final account data');
        console.log(finalData);

        navigate('/dashboard')
    }
    return (
        <div>
            <div className='flex bg-gray-800 p-0 gap-x-1 my-3 rounded-full max-w-max'>
                <button className={`${accountType === "student" ? 'bg-gray-500 text-gray-50' : 'bg-transparent text-white'} py-2 px-5 rounded-full duration-200`} onClick={()=> setAccountType('student')}>
                    Student
                </button>

                <button className={`${accountType === "instructor" ? 'bg-gray-500 text-gray-50'  : 'bg-transparent text-white'} py-1 px-5 rounded-full duration-200`} onClick={()=> setAccountType('instructor')}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className='flex justify-between'>
                    <label className='mt-1'>
                        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                            First Name<sup className="text-pink-800">*</sup>
                        </p>

                        <input className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[8px]" required type='text' placeholder='Enter first name' name='firstName' onChange={changeHandler} value={formData.firstName} />
                    </label>

                    <label className='mt-1'>
                        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                            Last Name<sup className="text-pink-800">*</sup>
                        </p>

                        <input className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[8px]" required type='text' placeholder='Enter last name' name='lastName' onChange={changeHandler} value={formData.lastName} />
                    </label>
                </div>

                <label className='mt-4'>
                    <p className="text-[0.875rem] mt-1 text-white mb-1 leading-[1.375rem]">
                        Email Address<sup className="text-pink-800">*</sup>
                    </p>

                    <input className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[8px]" required type='text' placeholder='Enter email id' name='email' onChange={changeHandler} value={formData.email} />
                </label>
                <div className='flex justify-between'>
                    <label className=' relative mt-1'>
                        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-pink-800">*</sup>
                        </p>

                        <input className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[8px]" required type={showPassword ? ('text') : ('password')} placeholder='Enter password' name='password' onChange={changeHandler} value={formData.password} />

                        <span className="absolute right-3 top-[40px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>

                    </label>

                    <label className=' relative mt-1'>
                        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                            Confirm Password<sup className="text-pink-800">*</sup>
                        </p>

                        <input className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[8px]" required type={showConfirmPassword ? ('text') : ('password')} placeholder='Confirm password' name='confirmPassword' onChange={changeHandler} value={formData.confirmPassword} />


                        <span className="absolute right-3 top-[40px] cursor-pointer" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>
                </div>


                <button className="bg-yellow-400 rounded-[8px] font-medium text-gray-500 px-[12px] py-[8px] mt-6 w-full">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm  