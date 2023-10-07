import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {signInGoogle} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn=()=>{
        signInGoogle()
        .then(result=>{
            const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, display: loggedInUser.photoURL }
                    fetch('http://localhost:5000/users',{
                        method:'POST',
                        headers:{
                            'content-type' :'application/json'
                        },
                        body: JSON.stringify(saveUser)

                    })

                    .then(res=>res.json())
                    .then(()=>{
                            navigate(from, {replace: true});
                        
                    })

            
        })
    }

    return (
        <div>
            <div>
                <h2 className='divider'>OR</h2>
                
               <div className='text-center'>
               <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                 <FaGoogle></FaGoogle>
                   
                </button>
               </div>
            </div>
        </div>
    );
};

export default SocialLogin;