import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import userSignup from "../assets/userSignup.gif";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const navigate = useNavigate();
  
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = async(data) => {
        const { password, confirmPassword, ...formData } = data;
        if (password === confirmPassword) {

            const fetchData = await fetch(import.meta.env.VITE_REACT_APP_SERVER_DOMAIN);
            localStorage.setItem('signupData', JSON.stringify(formData)); // Store signup data in localStorage
            toast.success("Signup Successful", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                bodyClassName: 'toast-body-success',
                onClose: () => {
                    navigate("/login", { state: { email: formData.email} });
                }
                
            });
        } else {
            toast.error("Passwords do not match", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                toastClassName: 'toast-error',
                bodyClassName: 'toast-body-error',
            });
        }
    };

    const password = watch("password", "");
    const confirmPassword = watch("confirmPassword", "");

    return (
        <div className='mt-6'>
            <div className="w-full max-w-md bg-white m-auto flex items-center flex-col">
                <Card className='rounded-lg shadow drop-shadow-md flex items-center flex-col p-2 w-full'>
                    <div className='w-24 overflow-hidden drop-shadow-lg p-2 flex flex-col justify-center mx-auto'>
                        <img src={userSignup} alt="" className='w-full' />
                        <br />
                        <h1 className='mx-auto font-bold text-2xl'> Signup </h1>
                    </div>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full md:px-5 px-2'>
                        {/* Form fields */}
                    </form>
                    <br />
                    <p>Already have an account ? <Link to='/login' className='text-blue-500 underline'>Login</Link></p>
                </Card>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Signup;
