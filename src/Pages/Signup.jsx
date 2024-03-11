// Signup.js

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

    console.log(import.meta.env.VITE_REACT_APP_SERVER_DOMAIN)

    const onSubmit = async (data) => {
        console.log(data)
        const { password, confirmPassword, ...formData } = data;
        
        if (password === confirmPassword) {
            try {
                const fetchData = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/signup`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
    
                // Rest of your code...
            } catch (error) {
                console.error('Error during fetch:', error);
                toast.error("Error during signup. Please try again later.", {
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
                onClose: () => {
                    navigate("/login", { state: { email: formData.email} });
                }
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
                        <TextField id="firstName" label="First Name" variant="outlined" type='text' size='small' name='firstName' className='w-full bg-slate-200 drop-shadow-md' {...register("firstName", { required: true })} /><br />
                        {errors.firstName && <span className="text-red-500">This field is required</span>}
                        <br />
                        <TextField id="lastName" label="Last Name" variant="outlined" type='text' size='small' name='lastName' className='w-full bg-slate-200 drop-shadow-md' {...register("lastName")} /><br />
                        <br />
                        <TextField id="email" label="Email" variant="outlined" type='email' size='small' name='email' className='w-full bg-slate-200 drop-shadow-md' {...register("email", { required: true })} /><br />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                        <br />
                        <FormControl variant="outlined" size='small' className='w-full bg-slate-200 drop-shadow-md'>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                name="password"
                                {...register("password", { required: true })}
                            />
                        </FormControl>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <br /><br />
                        <FormControl variant="outlined" size='small' className='w-full bg-slate-200 drop-shadow-md'>
                            <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-confirm-password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                                name="confirmPassword"
                                {...register("confirmPassword", { required: true })}
                            />
                        </FormControl>
                        {errors.confirmPassword && <span className="text-red-500">This field is required</span>}
                        {password !== confirmPassword && <span className="text-red-500">Passwords do not match</span>}
                        <br /><br />
                        <div className='flex justify-center cursor-pointer'>
                            <Button type='submit' variant="contained" color="error">
                                Signup
                            </Button>
                        </div>
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
