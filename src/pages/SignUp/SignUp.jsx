import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const SignUp = () => {
    const navigate = useNavigate();
    const {updateUserProfile,createUser}=useContext(AuthContext)
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)

                .then(()=>{
                    console.log('user profile update');
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      navigate('/')
                })
                .catch(error =>{
                    console.log(error)
                })

                
            })
            
        }
        

    return (
        <div className="hero min-h-screen bg-base-200">
        <Helmet>
           <title>Tech Mart | Signup</title>
       </Helmet>
       <div className="hero-content flex-col lg:flex-row-reverse">
           <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">SignUp now!</h1>
               <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           </div>
           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">First Name</span>
                       </label>
                       <input type="text" {...register("name", { required: true })} name='name' placeholder="name"
                          className="input input-bordered" />
                          {errors.name && <span className='text-red-600'>This field is required</span>}
                   </div>

                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Photo url</span>
                       </label>
                       <input type="text" {...register("photoURL")} name='photoURL' placeholder="photo url" className="input input-bordered" />
                       {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Email</span>
                       </label>
                       <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                       {errors.email && <span className='text-red-600'>This field is required</span>}
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text">Password</span>
                       </label>
                       <input type="password" {...register("password", )} name='password' placeholder="password" className="input input-bordered" />
                       {/* {errors.email && <span className='text-red-600'>password minimum 6 digit</span>} */}
                       <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                       </label>
                   </div>
                  

                   <div className="form-control mt-1">
                       <input className="btn btn-primary" type="submit" value="signup" />
                   </div>
               </form>
               <div className='px-2'>
                <small className='text-red-800'>you have an account? <Link to="/login"> please login</Link></small>
                </div>
           </div>
       </div>
   </div>
    );
};

export default SignUp;