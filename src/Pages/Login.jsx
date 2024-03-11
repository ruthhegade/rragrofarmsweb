import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Card, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import userSignup from "../assets/userSignup.gif";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const location = useLocation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  // const [passwordValue, setPasswordValue] = useState('');

  useEffect(() => {
    if (location.state && location.state.email) {
      reset({ email: location.state.email,});
  }
}, [location.state, reset]);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    if (email && password) {
      console.log(data); // Log form data to console
      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        bodyClassName: 'toast-body-success'
      });
    } else {
      toast.error("Please fill all the required fields", {
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

  return (
    <>
      <div className='mt-6'>
        <div className="w-full max-w-md bg-white m-auto flex items-center flex-col">
          <Card className='rounded-lg shadow drop-shadow-md flex items-center flex-col p-2 w-full'>
            <div className='w-24 overflow-hidden drop-shadow-lg p-2 flex flex-col justify-center mx-auto'>
              <img src={userSignup} alt="" className='w-full' />
              <br />
              <h1 className='mx-auto font-bold text-2xl'> Login </h1>
            </div>
            <br />
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:px-5 px-2'>
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
                  // value={passwordValue}
                  // onChange={(e) => setPasswordValue(e.target.value)}
                  {...register("password", { required: true })}
                />
              </FormControl>
              {errors.password && <span className="text-red-500">This field is required</span>}
              <br /><br />
              <div className='flex justify-center cursor-pointer'>
                <Button type='submit' variant="contained" color="error">
                  Login
                </Button>
              </div>
            </form>
            <br />
            <p>Create a New Account ? <Link to='/signup' className='text-blue-500 underline'>Signup</Link></p>
          </Card>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Login;
